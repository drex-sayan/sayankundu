/**
 * SAYAN KUNDU // PORTFOLIO RUNTIME ENGINE
 * Precision Grid Logic, Status Countdown Ticker, Lexicon Matrix, & Geometric Controls
 */

document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  initHeroLexicon();
  initCommandBar();
  initModal();
  initProjectDossierModal();
  initCopyrightYear();
  initProjectsCardStack();
  initInteractiveCard();
  initTiltedProfileCard();
  initProfileFlipCards();
  initSkillsScrollDeck();
  initMobileMenu();
  initSmoothNavigation();
  initCursorGlowButtons();
  initSnakeEducationJourney();
  initAcousticFeedback();
  initGridGuidesToggle();
  initGhostCursorEffect();
  initThemeEngine();
});

/* ==========================================================================
   1. REAL-TIME COUNTDOWN TIMER (HH : MM : SS)
   Format: HH : MM : SS, tabular-nums, separators at 20% opacity.
   ========================================================================== */
function initCountdownTimer() {
  const hoursEl = document.getElementById('timer-hours');
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');

  if (!hoursEl || !minutesEl || !secondsEl) return;

  // Real-time dynamic clock / session countdown
  let totalSeconds = 14 * 3600 + 42 * 60 + 18;

  function updateDisplay() {
    if (totalSeconds <= 0) {
      totalSeconds = 24 * 3600;
    }

    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursEl.textContent = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');

    totalSeconds--;
  }

  updateDisplay();
  setInterval(updateDisplay, 1000);
}

/* ==========================================================================
   2. HERO GRID 2x2 LEXICON CYCLER
   Segments in Inter Tight 900: 'SA', 'YAN', 'KUN', 'DU'
   ========================================================================== */
function initHeroLexicon() {
  const seg0 = document.getElementById('seg-0');
  const seg1 = document.getElementById('seg-1');
  const seg2 = document.getElementById('seg-2');
  const seg3 = document.getElementById('seg-3');
  const cycleBtn = document.getElementById('cycle-word-btn');

  if (!seg0 || !seg1 || !seg2 || !seg3 || !cycleBtn) return;

  const lexicons = [
    ['SA', 'YAN', 'KUN', 'DU'],
    ['AI_ML', 'IOT_', 'FULL', 'STCK'],
    ['CODE', 'DATA', 'SYST', 'EMS'],
    ['SOFT', 'WARE', 'ENGI', 'NEER'],
    ['B.P.', 'PODD', 'AR_C', 'SE__']
  ];

  let currentIndex = 0;

  function setWord(index) {
    const word = lexicons[index];
    const elements = [seg0, seg1, seg2, seg3];

    elements.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      
      setTimeout(() => {
        el.textContent = word[i];
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 120 + i * 35);
    });
  }

  cycleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % lexicons.length;
    setWord(currentIndex);
    playMechanicalClick();
  });
}

/* ==========================================================================
   3. COMMAND BAR SUBMISSION & SYSTEM TOAST (Validation, Success & Error States)
   ========================================================================== */
function initCommandBar() {
  const form = document.getElementById('command-form');
  const input = document.getElementById('operator-email');
  const toast = document.getElementById('system-toast');
  const toastCode = toast ? toast.querySelector('.toast-code') : null;
  const toastText = document.getElementById('toast-text');
  const toastClose = document.getElementById('toast-close-btn');

  if (!form || !input || !toast) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (!email || !emailRegex.test(email)) {
      // Error Feedback State
      input.classList.add('input-error');
      toast.classList.remove('success-state');
      toast.classList.add('error-state', 'active');
      if (toastCode) toastCode.textContent = '[SYS_ERR_422]';
      if (toastText) toastText.textContent = 'COMMUNICATION_FAULT // PLEASE_ENTER_VALID_EMAIL_ADDRESS';
      input.focus();
      playMechanicalClick();
      return;
    }

    // Success Feedback State
    input.classList.remove('input-error');
    toast.classList.remove('error-state');
    toast.classList.add('success-state', 'active');
    const token = Math.random().toString(36).substring(2, 8).toUpperCase();
    if (toastCode) toastCode.textContent = '[SYS_DISPATCH_200]';
    if (toastText) toastText.textContent = `TRANSMISSION_CONFIRMED // SENDER_${email.toUpperCase()} // LOG_#${token}`;
    playMechanicalClick();

    input.value = '';
    input.placeholder = 'MESSAGE_QUEUED_FOR_SAYAN_✓';

    setTimeout(() => {
      input.placeholder = 'name@organization.com';
    }, 4500);
  });

  input.addEventListener('input', () => {
    if (input.classList.contains('input-error')) {
      input.classList.remove('input-error');
    }
  });

  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toast.classList.remove('active', 'error-state', 'success-state');
      playMechanicalClick();
    });
  }
}

/* ==========================================================================
   4. MODAL CONTACT CLEARANCE PORTAL (Direct Contact Actions & Verification)
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('access-modal');
  const openBtn = document.getElementById('open-access-modal');
  const openDossierBtn = document.getElementById('btn-open-modal-dossier');
  const footerContactBtn = document.getElementById('footer-contact-btn');
  const mobileContactBtn = document.getElementById('mobile-nav-contact-btn');
  const closeBtn = document.getElementById('close-access-modal');

  if (!modal) return;

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    if (typeof playMechanicalClick === 'function') playMechanicalClick();
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (typeof playMechanicalClick === 'function') playMechanicalClick();
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (openDossierBtn) openDossierBtn.addEventListener('click', openModal);
  if (footerContactBtn) footerContactBtn.addEventListener('click', openModal);
  if (mobileContactBtn) mobileContactBtn.addEventListener('click', () => {
    if (typeof window.closeMobileMenu === 'function') window.closeMobileMenu();
    openModal();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  window.openContactModalWithSubject = openModal;
}

/* ==========================================================================
   4B. INTERACTIVE PROJECT DOSSIER MODAL (Isolated Single-Project View)
   ========================================================================== */
function initProjectDossierModal() {
  const modal = document.getElementById('project-dossier-modal');
  const closeBtn = document.getElementById('close-dossier-modal');
  const tabPanes = document.querySelectorAll('.dossier-tab-pane');
  const expandButtons = document.querySelectorAll('[data-open-dossier]');
  const headerLabel = document.getElementById('dossier-header-label');

  if (!modal) return;

  const projectTitles = {
    cognitio: 'PROJECT_01 // COGNITIO: REAL-TIME CODE ANALYZER',
    aqi: 'PROJECT_02 // AI AIR QUALITY SYSTEM',
    northstar: 'PROJECT_03 // NORTHSTAR CONTINUITY GUARDIAN',
    floodguard: 'PROJECT_04 // FLOODGUARD DISASTER WARNING'
  };

  function openDossier(tabId) {
    const target = tabId || 'cognitio';
    tabPanes.forEach(pane => {
      pane.classList.toggle('active', pane.id === `pane-${target}`);
    });
    if (headerLabel && projectTitles[target]) {
      headerLabel.textContent = projectTitles[target];
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    if (typeof playMechanicalClick === 'function') playMechanicalClick();
  }

  function closeDossier() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (typeof playMechanicalClick === 'function') playMechanicalClick();
  }

  // Open triggers on buttons
  expandButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const targetId = btn.getAttribute('data-open-dossier');
      openDossier(targetId);
    });
  });

  // Card click triggers (if not clicking on a link or button)
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      const projectId = card.getAttribute('data-project-id');
      if (projectId) {
        openDossier(projectId);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDossier);
  }

  // Close on backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeDossier();
    }
  });

  // Close on ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeDossier();
    }
  });

  // Connect inquiry buttons inside dossier to open contact modal with pre-filled context
  for (let i = 1; i <= 4; i++) {
    const inquiryBtn = document.getElementById(`dossier-contact-btn-${i}`);
    if (inquiryBtn) {
      inquiryBtn.addEventListener('click', () => {
        closeDossier();
        if (typeof window.openContactModalWithSubject === 'function') {
          window.openContactModalWithSubject();
        }
      });
    }
  }
}

/* ==========================================================================
   4C. DYNAMIC COPYRIGHT YEAR
   ========================================================================== */
function initCopyrightYear() {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   4.1. 3D FANNED CARD STACK (PROJECTS CAROUSEL)
   Interactive 3D arc perspective, drag-to-swipe physics, auto-advance,
   and bento grid view switcher
   ========================================================================== */
function initProjectsCardStack() {
  const arena = document.getElementById('card-stack-arena');
  const cards = Array.from(document.querySelectorAll('.card-stack-item'));
  const dots = Array.from(document.querySelectorAll('.stack-dot'));
  const prevBtn = document.getElementById('stack-prev-btn');
  const nextBtn = document.getElementById('stack-next-btn');
  const counterText = document.getElementById('stack-counter-text');
  const viewToggleStack = document.getElementById('view-toggle-stack');
  const viewToggleGrid = document.getElementById('view-toggle-grid');
  const stackView = document.getElementById('projects-card-stack-view');
  const gridView = document.getElementById('projects-grid-view');

  if (!arena || !cards.length) return;

  const total = cards.length;
  let activeIndex = 0;
  let isHovering = false;
  let autoAdvanceTimer = null;

  const projectLabels = [
    '01 / 04 // COGNITIO: CODE ANALYZER',
    '02 / 04 // AI AIR QUALITY SYSTEM',
    '03 / 04 // NORTHSTAR CONTINUITY GUARDIAN',
    '04 / 04 // FLOODGUARD DISASTER WARNING'
  ];

  function wrapIndex(n, len) {
    if (len <= 0) return 0;
    return ((n % len) + len) % len;
  }

  function signedOffset(i, active, len) {
    const raw = i - active;
    if (len <= 1) return raw;
    const alt = raw > 0 ? raw - len : raw + len;
    return Math.abs(alt) < Math.abs(raw) ? alt : raw;
  }

  function renderStack() {
    const isMobile = window.innerWidth <= 768;
    const cardWidth = Math.min(580, window.innerWidth * (isMobile ? 0.90 : 0.86));
    const overlap = isMobile ? 0.92 : 0.48;
    const cardSpacing = isMobile ? 14 : Math.max(16, Math.round(cardWidth * (1 - overlap)));
    const spreadDeg = isMobile ? 6 : 36;
    const maxVisible = isMobile ? 3 : 5;
    const maxOffset = Math.floor(maxVisible / 2);
    const stepDeg = maxOffset > 0 ? spreadDeg / maxOffset : 0;
    const depthPx = isMobile ? 35 : 130;
    const tiltXDeg = isMobile ? 2 : 10;
    const activeLiftPx = isMobile ? 6 : 20;
    const activeScale = isMobile ? 1.01 : 1.03;
    const inactiveScale = isMobile ? 0.96 : 0.94;

    cards.forEach((card, i) => {
      const off = signedOffset(i, activeIndex, total);
      const abs = Math.abs(off);
      const visible = abs <= maxOffset;

      if (!visible) {
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.style.visibility = 'hidden';
        return;
      }

      const rotateZ = off * stepDeg;
      const x = off * cardSpacing;
      const y = abs * (isMobile ? 4 : 10);
      const z = -abs * depthPx;
      const isActive = off === 0;
      const scale = isActive ? activeScale : inactiveScale;
      const lift = isActive ? -activeLiftPx : 0;
      const rotateX = isActive ? 0 : tiltXDeg;
      const zIndex = 100 - abs;

      card.style.visibility = 'visible';
      card.style.zIndex = zIndex;
      card.style.transform = `translate3d(${x}px, ${y + lift}px, ${z}px) rotateZ(${rotateZ}deg) rotateX(${rotateX}deg) scale(${scale})`;
      card.style.opacity = isActive ? '1' : `${Math.max(0.65, 1 - abs * 0.18)}`;
      card.classList.toggle('is-active', isActive);
    });

    // Update dots
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });

    // Update counter
    if (counterText && projectLabels[activeIndex]) {
      counterText.textContent = projectLabels[activeIndex];
    }
  }

  function setActive(idx) {
    activeIndex = wrapIndex(idx, total);
    renderStack();
    if (typeof playMechanicalClick === 'function') playMechanicalClick();
  }

  function prev() {
    setActive(activeIndex - 1);
  }

  function next() {
    setActive(activeIndex + 1);
  }

  // Click card to activate
  cards.forEach((card, idx) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;
      if (idx !== activeIndex) {
        setActive(idx);
      }
    });
  });

  // Dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) setActive(idx);
    });
  });

  if (prevBtn) prevBtn.addEventListener('click', prev);
  if (nextBtn) nextBtn.addEventListener('click', next);

  // Keyboard navigation
  arena.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); e.preventDefault(); }
    if (e.key === 'ArrowRight') { next(); e.preventDefault(); }
  });

  // Drag / Swipe handling with touch safety
  let startX = 0;
  let isDragging = false;

  arena.addEventListener('pointerdown', (e) => {
    if (e.target.closest('a, button')) return;
    startX = e.clientX;
    isDragging = true;
  });

  window.addEventListener('pointerup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = e.clientX - startX;
    if (diff > 45) prev();
    else if (diff < -45) next();
  });

  window.addEventListener('pointercancel', () => {
    isDragging = false;
  });

  // Auto advance
  function startAutoAdvance() {
    stopAutoAdvance();
    autoAdvanceTimer = setInterval(() => {
      if (!isHovering) next();
    }, 3600);
  }

  function stopAutoAdvance() {
    if (autoAdvanceTimer) clearInterval(autoAdvanceTimer);
  }

  arena.addEventListener('mouseenter', () => { isHovering = true; });
  arena.addEventListener('mouseleave', () => { isHovering = false; });

  startAutoAdvance();

  // View toggle (3D Card Stack vs 2x2 Grid)
  if (viewToggleStack && viewToggleGrid && stackView && gridView) {
    viewToggleStack.addEventListener('click', () => {
      viewToggleStack.classList.add('active');
      viewToggleGrid.classList.remove('active');
      stackView.style.display = 'flex';
      gridView.style.display = 'none';
      renderStack();
      if (typeof playMechanicalClick === 'function') playMechanicalClick();
    });

    viewToggleGrid.addEventListener('click', () => {
      viewToggleGrid.classList.add('active');
      viewToggleStack.classList.remove('active');
      stackView.style.display = 'none';
      gridView.style.display = 'grid';
      if (typeof playMechanicalClick === 'function') playMechanicalClick();
    });
  }

  window.addEventListener('resize', renderStack);
  renderStack();
}

/* ==========================================================================
   5. SPECIAL COMPONENT: INTERACTIVE GEOMETRIC CARD TRIGGER (NorthStar Card)
   45deg to 90deg rotation on parent hover / button toggle
   ========================================================================== */
function initInteractiveCard() {
  const card = document.getElementById('interactive-card');
  const triggerBtn = document.getElementById('btn-trigger-card-hover');

  if (!card) return;

  if (triggerBtn) {
    triggerBtn.addEventListener('click', () => {
      card.classList.toggle('force-hover');
      playMechanicalClick();

      if (card.classList.contains('force-hover')) {
        triggerBtn.textContent = 'RESET_ROTATION_TRIGGER';
      } else {
        triggerBtn.textContent = 'SIMULATE_ROTATION_TRIGGER';
      }
    });
  }
}

/* ==========================================================================
   5A. TILTED CARD COMPONENT (3D Physics Tilt & Dynamic Cursor Tooltip)
   Calculates mouse offset relative to card center, applies rotational spring
   physics, depth transform, and manages real-time floating cursor tooltip.
   ========================================================================== */
function initTiltedProfileCard() {
  const card = document.getElementById('profile-tilted-card');
  if (!card) return;

  const inner = card.querySelector('.tilted-card-inner');
  const tooltip = document.getElementById('tilted-card-tooltip');
  if (!inner) return;

  // On touch screens or mobile viewports, disable mouse tracking & hide tooltip
  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  if (isTouchDevice) {
    if (tooltip) tooltip.style.display = 'none';
    return;
  }

  const rotateAmplitude = 14; // Degrees of rotation at card boundaries

  card.addEventListener('mouseenter', () => {
    inner.style.transition = 'transform 120ms ease-out, box-shadow 300ms ease';
    if (tooltip) {
      tooltip.style.opacity = '1';
    }
  });

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const offsetX = x - centerX;
    const offsetY = y - centerY;

    const rotX = (offsetY / centerY) * -rotateAmplitude;
    const rotY = (offsetX / centerX) * rotateAmplitude;

    inner.style.transform = `rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;

    if (tooltip) {
      const tooltipX = x + 16;
      const tooltipY = y + 16;
      tooltip.style.transform = `translate3d(${tooltipX}px, ${tooltipY}px, 0)`;
      tooltip.style.opacity = '1';
    }
  });

  card.addEventListener('mouseleave', () => {
    inner.style.transition = 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 350ms ease';
    inner.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    if (tooltip) {
      tooltip.style.opacity = '0';
    }
  });
}

/* ==========================================================================
   5B. 3D FLIP CARDS COMPONENT (Contacts & Socials Matrix)
   Interactive 3D flip card toggle for desktop clicks & mobile touch events.
   ========================================================================== */
function initProfileFlipCards() {
  const cards = document.querySelectorAll('.flip-card-wrapper');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('click', (e) => {
      // Allow direct button/link activation on flipped backface
      if (e.target.closest('a') || e.target.closest('button')) {
        return;
      }
      card.classList.toggle('is-flipped');
      if (typeof playMechanicalClick === 'function') {
        playMechanicalClick();
      }
    });

    // Keyboard accessibility: Enter or Space flips the card
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'region');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('a') || e.target.closest('button')) return;
        e.preventDefault();
        card.classList.toggle('is-flipped');
        if (typeof playMechanicalClick === 'function') {
          playMechanicalClick();
        }
      }
    });
  });
}

/* ==========================================================================
   6. GRID GUIDES TOGGLE
   ========================================================================== */
function initGridGuidesToggle() {
  const btn = document.getElementById('btn-toggle-coords');
  if (!btn) return;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('show-grid-guides');
    const isActive = document.body.classList.contains('show-grid-guides');
    btn.textContent = isActive ? 'HAIRLINE_GUIDES_[ACTIVE]' : 'TOGGLE_HAIRLINE_GRID_GUIDES';
    playMechanicalClick();
  });
}

/* ==========================================================================
   7. ACOUSTIC FEEDBACK (Web Audio API Synthesizer)
   ========================================================================== */
let audioContext = null;
let soundEnabled = true;

function initAcousticFeedback() {
  const audioBtn = document.getElementById('btn-audio-toggle');
  if (!audioBtn) return;

  audioBtn.addEventListener('click', (e) => {
    e.preventDefault();
    soundEnabled = !soundEnabled;
    audioBtn.style.opacity = soundEnabled ? '1' : '0.35';
    if (soundEnabled) {
      playMechanicalClick();
    }
  });
}

function playMechanicalClick() {
  if (!soundEnabled) return;

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioContext) {
      audioContext = new AudioCtx();
    }

    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    // Precise high-frequency brutalist tactile click
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, audioContext.currentTime + 0.04);

    gain.gain.setValueAtTime(0.04, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(audioContext.destination);

    osc.start();
    osc.stop(audioContext.currentTime + 0.04);
  } catch (err) {
    // Audio context may require prior user interaction
  }
}

/* ==========================================================================
   8. SKILLS SCROLL DECK RUNTIME (Bidirectional Card Rollout & Swipe Engine)
   ========================================================================== */
function initSkillsScrollDeck() {
  const container = document.getElementById('skills-deck-track');
  const stage = document.getElementById('skills-sticky-stage');
  const cards = Array.from(document.querySelectorAll('.skills-deck-card'));
  const stepBtns = Array.from(document.querySelectorAll('.deck-step-btn, [data-deck-step]'));
  const counterDisplay = document.getElementById('deck-counter-display');
  const progressBar = document.getElementById('deck-progress-bar');
  const prevBtn = document.getElementById('deck-prev-btn');
  const nextBtn = document.getElementById('deck-next-btn');

  if (!container || !cards.length) return;

  const totalCards = cards.length;
  let currentActiveCard = 0;

  // Key transition intervals for cards 1, 2, 3
  // Evenly spaced across scroll travel with minimal dead zones for continuous, responsive swiping
  const intervals = [
    { start: 0.02, end: 0.32 }, // Card 1 enters
    { start: 0.35, end: 0.65 }, // Card 2 enters
    { start: 0.68, end: 0.98 }  // Card 3 enters
  ];

  function getProgress() {
    const rect = container.getBoundingClientRect();
    const navHeight = 72;
    const windowH = window.innerHeight;
    const totalDistance = container.offsetHeight - windowH;

    if (totalDistance <= 0) return 0;
    const scrolled = -rect.top + navHeight;
    return Math.min(Math.max(scrolled / totalDistance, 0), 1);
  }

  function updateDeck() {
    const progress = getProgress();

    // 1. Calculate each card's entry fraction t (0 = not entered, 1 = fully entered)
    const cardFractions = [1]; // Card 0 is always present

    intervals.forEach(interval => {
      let t = 0;
      if (progress >= interval.end) {
        t = 1;
      } else if (progress <= interval.start) {
        t = 0;
      } else {
        t = (progress - interval.start) / (interval.end - interval.start);
      }
      cardFractions.push(t);
    });

    // 2. Determine active card index for HUD/stepper
    let activeIndex = 0;
    if (progress >= 0.83) {
      activeIndex = 3;
    } else if (progress >= 0.50) {
      activeIndex = 2;
    } else if (progress >= 0.17) {
      activeIndex = 1;
    } else {
      activeIndex = 0;
    }

    // 3. Update Progress Bar
    if (progressBar) {
      const minProgress = 0.25;
      const visualProgress = minProgress + progress * (1 - minProgress);
      progressBar.style.width = `${(visualProgress * 100).toFixed(1)}%`;
    }

    // 4. Transform and animate each card layer (Clean, Opaque Physical Card Swipe)
    cards.forEach((card, i) => {
      if (i === 0) {
        // Base card stays in place, scales down slightly as Card 1 covers it
        const nextFraction = cardFractions[1];
        const scale = 1 - 0.04 * nextFraction;
        const yOffset = -15 * nextFraction;
        card.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.pointerEvents = nextFraction >= 0.8 ? 'none' : 'auto';
      } else {
        const entryFraction = cardFractions[i];

        if (entryFraction <= 0) {
          // Card waiting below viewport — hidden to prevent any bleed
          card.style.transform = 'translate3d(0, 115%, 0)';
          card.style.opacity = '1';
          card.style.visibility = 'hidden';
          card.style.pointerEvents = 'none';
        } else if (entryFraction < 1) {
          // Card actively swiping/rolling up into position (100% OPAQUE - zero ghost text)
          const yPercent = (1 - entryFraction) * 115;
          card.style.transform = `translate3d(0, ${yPercent.toFixed(1)}%, 0)`;
          card.style.opacity = '1';
          card.style.visibility = 'visible';
          card.style.pointerEvents = entryFraction >= 0.5 ? 'auto' : 'none';
        } else {
          // Card is fully in place. Check if the next card is entering on top of it
          if (i < cards.length - 1) {
            const nextFraction = cardFractions[i + 1];
            const scale = 1 - 0.04 * nextFraction;
            const yOffset = -15 * nextFraction;
            card.style.transform = `translate3d(0, ${yOffset.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.pointerEvents = nextFraction >= 0.8 ? 'none' : 'auto';
          } else {
            // Card 3 (topmost final card) remains in full view once entered
            card.style.transform = 'translate3d(0, 0, 0)';
            card.style.opacity = '1';
            card.style.visibility = 'visible';
            card.style.pointerEvents = 'auto';
          }
        }
      }
    });

    // 5. Update HUD, Stepper Buttons, and Counter
    if (activeIndex !== currentActiveCard) {
      currentActiveCard = activeIndex;

      if (counterDisplay) {
        counterDisplay.textContent = `0${activeIndex + 1} / 0${totalCards}`;
      }

      stepBtns.forEach((btn, idx) => {
        btn.classList.toggle('active', idx === activeIndex);
      });

      cards.forEach((card, idx) => {
        card.classList.toggle('active', idx === activeIndex);
      });
    }
  }

  // Smooth scroll to target card index
  function scrollToCard(index) {
    const navHeight = 72;
    const windowH = window.innerHeight;
    const totalDistance = container.offsetHeight - windowH;
    
    // Exact progress targets corresponding to each card's stable plateau
    const targetProg = [0.0, 0.34, 0.68, 0.99][index] || 0;
    
    const containerDocTop = container.getBoundingClientRect().top + window.scrollY;
    const targetScrollY = containerDocTop - navHeight + targetProg * totalDistance;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  }

  // Bind step navigation buttons
  stepBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const step = parseInt(btn.getAttribute('data-deck-step'), 10);
      if (!isNaN(step)) {
        scrollToCard(step);
        if (typeof playMechanicalClick === 'function') playMechanicalClick();
      }
    });
  });

  // Bind Prev / Next buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const prev = Math.max(0, currentActiveCard - 1);
      scrollToCard(prev);
      if (typeof playMechanicalClick === 'function') playMechanicalClick();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const next = Math.min(totalCards - 1, currentActiveCard + 1);
      scrollToCard(next);
      if (typeof playMechanicalClick === 'function') playMechanicalClick();
    });
  }

  // Optimized animation frame handler
  let isTicking = false;
  function onScroll() {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateDeck();
        isTicking = false;
      });
      isTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial calculation
  updateDeck();
}

/* ==========================================================================
   9. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle-btn');
  const backdrop = document.getElementById('mobile-nav-backdrop');
  const closeBtn = document.getElementById('mobile-nav-close-btn');
  const navLinks = document.querySelectorAll('[data-nav-close]');

  if (!toggleBtn || !backdrop) return;

  function openMenu() {
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    toggleBtn.classList.add('active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    playMechanicalClick();
  }

  function closeMenu() {
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    playMechanicalClick();
  }

  window.closeMobileMenu = closeMenu;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (backdrop.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) closeMenu();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) {
      closeMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

/* ==========================================================================
   10. SMOOTH NAVIGATION & DYNAMIC FOOTER UTILITIES
   ========================================================================== */
function initSmoothNavigation() {
  // Brand logo click to smooth scroll to top
  const brandLogos = document.querySelectorAll('.brand-link, .footer-brand-link, #footer-back-to-top');
  brandLogos.forEach(logo => {
    logo.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      if (typeof playMechanicalClick === 'function') playMechanicalClick();
    });
  });

  // Top Section Navigation Buttons
  const navSectionBtns = Array.from(document.querySelectorAll('.nav-section-btn'));
  const sectionIds = ['profile', 'projects', 'skills', 'education'];
  const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  navSectionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = btn.getAttribute('data-section-target') || btn.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const navHeight = 72;
        const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: 'smooth'
        });
        if (typeof playMechanicalClick === 'function') playMechanicalClick();
      }
    });
  });

  // Scroll-Spy to highlight current section nav button
  function updateScrollSpy() {
    const scrollPosition = window.scrollY + 160; // Offset for navbar and margin
    let currentActiveId = null;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        currentActiveId = section.id;
        break;
      }
    }

    navSectionBtns.forEach(btn => {
      const targetId = btn.getAttribute('data-section-target') || btn.getAttribute('href').replace('#', '');
      btn.classList.toggle('active', targetId === currentActiveId);
    });

    // Harmonize Ghost Cursor fluid tint with active sector
    if (window.ghostCursorInstance && typeof window.ghostCursorInstance.setColor === 'function') {
      const sectionPalette = {
        profile: '#ffffff',    // Sector 01 Bio: Glowing White
        projects: '#ffffff',   // Sector 02 Projects: Glowing White
        skills: '#B19EEF',     // Sector 03 Skills: Lavender (Three.js GhostCursor signature)
        education: '#ffffff'   // Sector 04 Academics: Glowing White
      };
      const activeColor = sectionPalette[currentActiveId] || '#ffffff';
      if (window._currentGhostColor !== activeColor) {
        window._currentGhostColor = activeColor;
        window.ghostCursorInstance.setColor(activeColor);
      }
    }
  }

  window.addEventListener('scroll', updateScrollSpy, { passive: true });
  updateScrollSpy();

  // Dynamic copyright year update
  const copyrightYearEl = document.getElementById('copyright-year');
  if (copyrightYearEl) {
    copyrightYearEl.textContent = new Date().getFullYear();
  }
}

/* ==========================================================================
   11. INTERACTIVE CALL-TO-ACTION BUTTONS WITH CURSOR GLOW EFFECT
   Tracks cursor position and dynamically updates CSS variables --mouse-x & --mouse-y.
   Features SVG right-arrow micro-interaction and custom radial spotlight.
   Ideal for hero sections, onboarding prompts, and primary conversion funnels.
   ========================================================================== */
function initCursorGlowButtons() {
  const glowButtons = document.querySelectorAll(
    '.command-join-btn, .pill-btn, .glow-cta-btn, .proj-action-btn, ' +
    '.profile-action-link, .modal-submit-btn, .dossier-action-btn, ' +
    '#footer-contact-btn, #footer-back-to-top, .sec-step-pill, .deck-nav-btn, .nav-section-btn'
  );

  glowButtons.forEach(btn => {
    btn.classList.add('glow-cta-btn');

    btn.addEventListener('pointermove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btn.style.setProperty('--mouse-x', `${x.toFixed(1)}px`);
      btn.style.setProperty('--mouse-y', `${y.toFixed(1)}px`);
    });

    btn.addEventListener('pointerleave', () => {
      btn.style.removeProperty('--mouse-x');
      btn.style.removeProperty('--mouse-y');
    });
  });
}

/* ==========================================================================
   12. SNAKE S-CURVE SCROLL JOURNEY ENGINE (SECTOR 04 ACADEMICS)
   Dynamic sinusoidal Bezier S-curve drawing path with a glowing snake glider.
   Reveals educational details sequentially one-by-one as the glider arrives,
   dimming out previous/upcoming milestones for focused scrollytelling.
   ========================================================================== */
function initSnakeEducationJourney() {
  const arena = document.getElementById('snake-journey-arena');
  const canvas = document.getElementById('snake-canvas');
  const ghostPath = document.getElementById('snake-ghost-path');
  const fillPath = document.getElementById('snake-fill-path');
  const gliderGroup = document.getElementById('snake-glider-group');
  const startOrigin = document.getElementById('journey-start-origin');
  const stages = document.querySelectorAll('.journey-stage');
  const telemetry = document.getElementById('journey-telemetry-status');

  if (!arena || !canvas || !ghostPath || !fillPath || !gliderGroup || stages.length === 0) {
    return;
  }

  let totalLength = 0;
  let anchorPoints = [];

  function updateGeometry() {
    const arenaRect = arena.getBoundingClientRect();
    const arenaW = arena.clientWidth || arenaRect.width;
    const arenaH = arena.clientHeight || arenaRect.height;

    canvas.setAttribute('viewBox', `0 0 ${arenaW} ${arenaH}`);
    canvas.setAttribute('width', arenaW);
    canvas.setAttribute('height', arenaH);

    anchorPoints = [];

    // Point 0: Top origin point where snake line starts (centered at top)
    if (startOrigin) {
      const startAnchor = startOrigin.querySelector('.snake-milestone-anchor');
      const sRect = (startAnchor || startOrigin).getBoundingClientRect();
      const sx = sRect.left + sRect.width / 2 - arenaRect.left;
      const sy = sRect.top + sRect.height / 2 - arenaRect.top;
      anchorPoints.push({ x: sx, y: Math.max(16, sy) });
    } else {
      anchorPoints.push({ x: arenaW / 2, y: 24 });
    }

    // Points 1..4: The 4 actual educational credentials
    stages.forEach((stage, idx) => {
      const anchor = stage.querySelector('.snake-milestone-anchor');
      if (anchor) {
        const aRect = anchor.getBoundingClientRect();
        const x = aRect.left + aRect.width / 2 - arenaRect.left;
        const y = aRect.top + aRect.height / 2 - arenaRect.top;
        anchorPoints.push({ x, y, stageIdx: idx });
      }
    });

    if (anchorPoints.length < 2) return;

    // Construct smooth sinusoidal Bezier S-curve through all stage anchors
    let d = `M ${anchorPoints[0].x.toFixed(1)} ${anchorPoints[0].y.toFixed(1)}`;
    for (let i = 0; i < anchorPoints.length - 1; i++) {
      const p1 = anchorPoints[i];
      const p2 = anchorPoints[i + 1];
      const dy = p2.y - p1.y;
      const cp1x = p1.x;
      const cp1y = p1.y + dy * 0.5;
      const cp2x = p2.x;
      const cp2y = p2.y - dy * 0.5;
      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }

    ghostPath.setAttribute('d', d);
    fillPath.setAttribute('d', d);

    totalLength = fillPath.getTotalLength();
    fillPath.style.strokeDasharray = `${totalLength} ${totalLength}`;
    fillPath.style.strokeDashoffset = `${totalLength}`;

    // Position glider at start
    gliderGroup.setAttribute('transform', `translate(${anchorPoints[0].x.toFixed(1)}, ${anchorPoints[0].y.toFixed(1)})`);

    onScroll();
  }

  function onScroll() {
    if (totalLength === 0 || anchorPoints.length === 0) return;

    const arenaRect = arena.getBoundingClientRect();
    const windowH = window.innerHeight;

    // Scrollytelling progress window: starts when arena approaches viewport, ends at final milestone
    const startOffset = windowH * 0.70;
    const endOffset = windowH * 0.40;
    const scrollDistance = arenaRect.height + startOffset - endOffset;
    const currentProgress = (startOffset - arenaRect.top) / scrollDistance;
    const progress = Math.max(0, Math.min(1, currentProgress));

    // Draw snake forward in direct proportion to scroll percentage
    const drawOffset = totalLength * (1 - progress);
    fillPath.style.strokeDashoffset = drawOffset;

    const drawnDist = progress * totalLength;
    const pt = fillPath.getPointAtLength(drawnDist);
    gliderGroup.setAttribute('transform', `translate(${pt.x.toFixed(1)}, ${pt.y.toFixed(1)})`);

    // Determine active stage: which educational milestone the glider is currently on
    let activeStageIdx = 0;
    let minDiff = Infinity;
    stages.forEach((stage, idx) => {
      const p = anchorPoints[idx + 1]; // +1 offset for top origin anchor
      if (p) {
        const diff = Math.abs(pt.y - p.y);
        if (diff < minDiff) {
          minDiff = diff;
          activeStageIdx = idx;
        }
      }
    });

    // Enforce "we can see only the detail the glider snake is on":
    // Only active stage gets .glider-active (opacity 1, sharp, scale 1).
    // Previous stages get .glider-past (dissolved/dimmed).
    // Upcoming stages get .glider-future (hidden/blurred).
    stages.forEach((stage, idx) => {
      if (idx === activeStageIdx) {
        stage.classList.add('glider-active');
        stage.classList.remove('glider-past', 'glider-future');
      } else if (idx < activeStageIdx) {
        stage.classList.remove('glider-active', 'glider-future');
        stage.classList.add('glider-past');
      } else {
        stage.classList.remove('glider-active', 'glider-past');
        stage.classList.add('glider-future');
      }
    });

    // Update telemetry status in section banner
    if (telemetry) {
      const credentialLabels = [
        'B.TECH_CSE // CURRENTLY_ENROLLED',
        'SCOTTISH_CHURCH // COMPLETED',
        'DIGITAL_MARKETING // CERTIFIED',
        'COMMUNICATION_LANGUAGES // PROFICIENT'
      ];
      telemetry.textContent = `ACADEMIC_TRAJECTORY // [${credentialLabels[activeStageIdx]}]`;
    }
  }

  // Milestone anchor click: smooth scroll to that stage
  document.querySelectorAll('.journey-stage .snake-milestone-anchor').forEach((anchor) => {
    anchor.addEventListener('click', () => {
      const stepIdx = parseInt(anchor.getAttribute('data-step-anchor'), 10);
      if (!isNaN(stepIdx) && stages[stepIdx]) {
        stages[stepIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', updateGeometry);

  // Initialize once DOM elements settle layout
  setTimeout(updateGeometry, 80);
}

/* ==========================================================================
   14. GHOST CURSOR FLUID SHADER EFFECT (Three.js WebGL FBM Simulation)
   Cinematic smoky cursor trail featuring dynamic bloom, fluid inertia,
   and intelligent text-detection dimming.
   ========================================================================== */
function initGhostCursorEffect() {
  if (typeof window.initGhostCursor !== 'function') return null;

  const container = document.getElementById('global-ghost-cursor');
  if (!container) return null;

  // Initialize with balanced, refined intensity & elegant glow
  const cursorInstance = window.initGhostCursor({
    container: container,
    parent: window,
    color: '#ffffff',         // Base glowing white, dynamically shifts to #B19EEF in skills
    brightness: 1.4,          // Balanced, calibrated luminous brightness
    edgeIntensity: 0,         // Edge accentuation intensity
    trailLength: 24,          // Smooth organic fluid motion trail
    inertia: 0.42,            // Movement inertia (fluid lag)
    grainIntensity: 0.04,     // Subtle cinematic film grain
    bloomStrength: 0.58,      // Refined bloom glow intensity
    bloomRadius: 0.75,        // Balanced bloom blur radius
    bloomThreshold: 0.01,     // Soft-onset bloom threshold
    fadeDelayMs: 220,         // Delay before trail fades out when idle
    fadeDurationMs: 1100,     // Smooth fade out animation
    mixBlendMode: 'screen',   // Screen blend mode for vibrant dark-mode illumination
    heroIntensity: 1.25,      // Crisp intensity in hero 2x2 grid
    textIntensity: 1.15,      // Calibrated visibility over text (prominent without blowing out)
    blankIntensity: 1.05      // Gentle ambient smoke in negative space
  });

  window.ghostCursorInstance = cursorInstance;
  return cursorInstance;
}


/* ==========================================================================
   16. THEME ENGINE (LOCKED TO DARK OBSIDIAN // LIGHT MODE DISABLED)
   Light mode temporarily removed per specification while retaining disabled button
   ========================================================================== */
function initThemeEngine() {
  const navbarBtn = document.getElementById('btn-theme-toggle');
  const mobileBtn = document.getElementById('mobile-theme-toggle-btn');
  const mobileText = document.getElementById('mobile-theme-text');

  // Enforce dark obsidian mode and remove any stored light mode preference
  document.body.classList.remove('light-mode');
  try {
    localStorage.removeItem('portfolio-theme');
  } catch (e) {
    // Ignore storage errors
  }

  // Ensure button remains present in DOM but disabled
  if (navbarBtn) {
    navbarBtn.disabled = true;
    navbarBtn.setAttribute('aria-disabled', 'true');
    navbarBtn.setAttribute('title', 'LIGHT MODE CURRENTLY DISABLED');
  }

  if (mobileBtn) {
    mobileBtn.disabled = true;
    mobileBtn.setAttribute('aria-disabled', 'true');
    mobileBtn.setAttribute('title', 'LIGHT MODE CURRENTLY DISABLED');
  }

  if (mobileText) {
    mobileText.textContent = 'THEME: OBSIDIAN DARK';
  }

  window.setSiteTheme = function() {};
  window.toggleSiteTheme = function() {};
}
