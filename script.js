/* ==========================================================================
   ATHARVA DENGRE — PORTFOLIO DYNAMIC INTERACTIVE ENGINE
   Particle Canvas, Typing Effect, 3D Card Tilt, Live AI Simulator & Filters
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. BACKGROUND CANVAS PARTICLE MESH
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');

  let width, height;
  let particles = [];
  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
  let mouse = { x: null, y: null, radius: 140 };

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.4 ? 'rgba(255, 45, 75, ' : 'rgba(157, 78, 221, ';
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse attraction
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x += (dx / dist) * force * 1.2;
          this.y += (dy / dist) * force * 1.2;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.alpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animateCanvas() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 45, 75, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateCanvas);
  }
  animateCanvas();


  /* ------------------------------------------------------------------------
     2. DYNAMIC TYPING EFFECT
     ------------------------------------------------------------------------ */
  const roles = [
    'Source-to-Pay (S2P) & Procure-to-Pay (P2P) Operations',
    'SAP S/4HANA MM & MDG Specialist @ IBM',
    'Leveraging SAP GenAI Hub & watsonx for ERP Automations',
    'Ariba CIG, Z-IDOC (ZARB/ZICP/ZWPO) & WRICEF Lead',
    'SAP Joule, Agentic AI & Intelligent Triage Architect'
  ];

  const typingEl = document.getElementById('typingText');
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typingSpeed = 50;
  const deleteSpeed = 30;
  const holdDelay = 1800;

  function typeRole() {
    const currentRole = roles[roleIdx];

    if (!isDeleting) {
      typingEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === currentRole.length) {
        isDeleting = true;
        setTimeout(typeRole, holdDelay);
        return;
      }
    } else {
      typingEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(typeRole, isDeleting ? deleteSpeed : typingSpeed);
  }
  typeRole();


  /* ------------------------------------------------------------------------
     3. ANIMATED STAT COUNTERS
     ------------------------------------------------------------------------ */
  const statValues = document.querySelectorAll('.stat-value');
  let statsTriggered = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsTriggered) {
        statsTriggered = true;
        statValues.forEach(el => {
          const target = parseFloat(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          const isDecimal = el.dataset.count.includes('.');
          let current = 0;
          const steps = 45;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
          }, 30);
        });
      }
    });
  }, { threshold: 0.4 });

  const heroSection = document.getElementById('hero');
  if (heroSection) countObserver.observe(heroSection);


  /* ------------------------------------------------------------------------
     4. SCROLL REVEAL ANIMATIONS
     ------------------------------------------------------------------------ */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => revealObserver.observe(el));


  /* ------------------------------------------------------------------------
     5. SKILL PROGRESS BAR ANIMATION
     ------------------------------------------------------------------------ */
  const skillSection = document.getElementById('skills');
  let skillsTriggered = false;

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !skillsTriggered) {
        skillsTriggered = true;
        document.querySelectorAll('.meter-fill').forEach(fill => {
          fill.style.width = fill.dataset.width;
        });
      }
    });
  }, { threshold: 0.2 });

  if (skillSection) skillObserver.observe(skillSection);


  /* ------------------------------------------------------------------------
     6. CERTIFICATION CATEGORY FILTER
     ------------------------------------------------------------------------ */
  const certFilterBtns = document.querySelectorAll('.cert-filter-btn');
  const certCards = document.querySelectorAll('.cert-card');

  certFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      certFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      certCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });


  /* ------------------------------------------------------------------------
     7. LIVE AGENTIC AI INCIDENT SIMULATOR ENGINE
     ------------------------------------------------------------------------ */
  const runSimBtn = document.getElementById('runSimBtn');
  const scenarioSelect = document.getElementById('scenarioSelect');
  const terminalBody = document.getElementById('terminalBody');
  const simProgress = document.getElementById('simProgress');
  const simStatusText = document.getElementById('simStatusText');
  const clearTermBtn = document.getElementById('clearTermBtn');

  const scenarioData = {
    vendor_block: {
      title: 'Vendor Master BP Release Block (MDG / ME21N)',
      steps: [
        { agent: '[01 INTAKE AGENT]', text: 'Received Ticket #INC-9482: "PO creation blocked for Vendor 409210 (Company Code 1000)". Parsing payload...' },
        { agent: '[01 INTAKE AGENT]', text: 'Extracted parameters: Vendor=409210, CompCode=1000, T-Code=ME21N, ErrorCode=ME024.' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Checking context: Querying SAP MDG change request history for Vendor 409210...' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Found CR #88412 pending approval in Fiori MDG-S workflow (BRFplus block rule triggered).' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Querying watsonx RAG Knowledge Base for MDG-S rule BRF_MDG_VEND_BLK_04...' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Match found (Confidence: 98.4%): Vendor address field missing tax registration ID, auto-applying Posting Block.' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Assist-to-Human Fix Recommendation:' },
        { agent: '[04 RESOLUTION AGENT]', text: '1. Update Tax ID 2 under MDG-S CR #88412.\n2. Execute BRFplus decision re-evaluation.\n3. Release posting block via t-code BP / MDG governance approval.' },
        { agent: '[05 ROUTING AGENT]', text: 'Ticket enriched with full RCA payload and assigned to Senior MDG Consultant (Atharva Dengre).' }
      ]
    },
    idoc_desadv: {
      title: 'IDOC DESADV Quantity Mismatch (WE02 / Ariba CIG)',
      steps: [
        { agent: '[01 INTAKE AGENT]', text: 'Received Alert #IDOC-4912: "Status 51 on IDOC DESADV_01 #892019482 via Ariba CIG Interface".' },
        { agent: '[01 INTAKE AGENT]', text: 'Parsed segment E1EDP20: Item 10, Delivery Qty 500 EA vs PO Line Qty 450 EA.' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Fetching PO 4500891022 line details via SAP RFC query...' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Confirmed PO 4500891022 allows 10% over-delivery tolerance, but IDOC exceeds limit by 11.1%.' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Consulting SAP AMS IDOC Troubleshooting Engine...' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Root Cause (Confidence: 96.8%): Supplier dispatched excess batch without PO tolerance amendment in ME22N.' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Assist-to-Human Resolution Plan:' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Option A: Buyer updates PO 4500891022 over-delivery tolerance to 15% in ME22N.\nOption B: Reprocess IDOC in BD87 after vendor sends updated DESADV dispatch advice.' },
        { agent: '[05 ROUTING AGENT]', text: 'Notified P2P Procurement Operations team with step-by-step reprocessing commands.' }
      ]
    },
    pricing_match: {
      title: 'PO 3-Way Match Tax Pricing Discrepancy (ME22N / MIRO)',
      steps: [
        { agent: '[01 INTAKE AGENT]', text: 'Received Incident #INC-10492: "MIRO Invoice posting blocked for PO 4500771209 (3-Way Match Price Variance)".' },
        { agent: '[01 INTAKE AGENT]', text: 'Identified variance: Invoice tax amount $14,200 vs PO calculated tax $12,800 (Difference: $1,400).' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Inspecting pricing procedure MWST tax code determination in SAP S/4HANA MM...' },
        { agent: '[02 CLARIFICATION AGENT]', text: 'Identified region code mismatch between Vendor Plant and Delivery Location.' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Executing RAG similarity search against historical MM incident database...' },
        { agent: '[03 DIAGNOSIS AGENT]', text: 'Root Cause (Confidence: 99.1%): Tax jurisdiction code updated in SAP S/4HANA post PO issuance.' },
        { agent: '[04 RESOLUTION AGENT]', text: 'Assist-to-Human Action Plan:' },
        { agent: '[04 RESOLUTION AGENT]', text: '1. Update condition record in ME22N for line 10.\n2. Re-trigger PO release strategy.\n3. Release MIRO payment block via MRBR.' },
        { agent: '[05 ROUTING AGENT]', text: 'Dispatched context summary to Accounts Payable & Sourcing Lead.' }
      ]
    }
  };

  let simRunning = false;

  function appendTermLine(text, type = 'info') {
    const line = document.createElement('div');
    line.className = `term-line ${type}`;

    if (text.includes('[01') || text.includes('[02') || text.includes('[03') || text.includes('[04') || text.includes('[05')) {
      line.innerHTML = `<span class="term-line agent">${text.split(':')[0]}:</span> ${text.split(':').slice(1).join(':')}`;
    } else {
      line.textContent = text;
    }

    terminalBody.appendChild(line);
    terminalBody.scrollTop = terminalBody.scrollHeight;
  }

  if (runSimBtn) {
    runSimBtn.addEventListener('click', () => {
      if (simRunning) return;
      simRunning = true;

      const scenarioKey = scenarioSelect.value;
      const scenario = scenarioData[scenarioKey];

      terminalBody.innerHTML = '';
      appendTermLine(`[SYSTEM] Initializing Multi-Agent Engine for Scenario: "${scenario.title}"...`, 'highlight');
      simStatusText.textContent = 'Status: Processing Agent Pipeline...';
      simProgress.style.width = '10%';

      let stepIdx = 0;
      const totalSteps = scenario.steps.length;

      const stepTimer = setInterval(() => {
        if (stepIdx < totalSteps) {
          const step = scenario.steps[stepIdx];
          const type = step.agent.includes('RESOLVE') ? 'highlight' : step.agent.includes('ROUTING') ? 'success' : 'info';
          appendTermLine(`${step.agent} ${step.text}`, type);

          stepIdx++;
          const pct = Math.min(Math.round((stepIdx / totalSteps) * 100), 100);
          simProgress.style.width = `${pct}%`;
        } else {
          clearInterval(stepTimer);
          appendTermLine('[SYSTEM] Multi-Agent Pipeline Completed. Assist-to-Human Recommendation Ready.', 'success');
          simStatusText.textContent = 'Status: Completed Successfully';
          simRunning = false;
        }
      }, 700);
    });
  }

  if (clearTermBtn) {
    clearTermBtn.addEventListener('click', () => {
      terminalBody.innerHTML = '<div class="term-line info">[SYSTEM] Terminal cleared. Select scenario and click "Run Simulation".</div>';
      simProgress.style.width = '0%';
      simStatusText.textContent = 'Status: Idle';
      showToast('Terminal cleared');
    });
  }


  /* ------------------------------------------------------------------------
     8. 3D GLASS CARD TILT EFFECT
     ------------------------------------------------------------------------ */
  const avatarCard = document.getElementById('avatarCard');
  if (avatarCard) {
    avatarCard.addEventListener('mousemove', (e) => {
      const rect = avatarCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (centerY - y) / 16;
      const rotateY = (x - centerX) / 16;

      avatarCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    avatarCard.addEventListener('mouseleave', () => {
      avatarCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }


  /* ------------------------------------------------------------------------
     9. TOAST NOTIFICATION SYSTEM & CLIPBOARD
     ------------------------------------------------------------------------ */
  function showToast(message, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailContactBtn = document.getElementById('copyEmailContactBtn');

  function copyEmail() {
    navigator.clipboard.writeText('atharvadengre@gmail.com').then(() => {
      showToast('Copied email: atharvadengre@gmail.com');
    }).catch(() => {
      showToast('Email: atharvadengre@gmail.com');
    });
  }

  if (copyEmailBtn) copyEmailBtn.addEventListener('click', copyEmail);
  if (copyEmailContactBtn) copyEmailContactBtn.addEventListener('click', copyEmail);


  /* ------------------------------------------------------------------------
     10. NAVIGATION TOGGLE & ACTIVE STATE
     ------------------------------------------------------------------------ */
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  const mainNav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      mainNav.classList.add('scrolled');
    } else {
      mainNav.classList.remove('scrolled');
    }
  });


  /* ------------------------------------------------------------------------
     11. FLOATING CONTROLS (SCROLL TOP & GLOW TOGGLE)
     ------------------------------------------------------------------------ */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const glowToggleBtn = document.getElementById('glowToggleBtn');
  const glowBlobs = document.querySelectorAll('.ambient-glow');

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (glowToggleBtn) {
    let glowOn = true;
    glowToggleBtn.addEventListener('click', () => {
      glowOn = !glowOn;
      glowBlobs.forEach(b => b.style.opacity = glowOn ? '0.5' : '0.05');
      showToast(glowOn ? 'Ambient Glass Glow Enabled' : 'Ambient Glass Glow Dimmed', 'fa-wand-magic-sparkles');
    });
  }

});
