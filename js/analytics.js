/* ==========================================================================
   THE NEX MINDS - Conversion & Analytics Tracking (Section 4.4)
   Events: cta_click, form_start, form_submit, program_view, guide_download, whatsapp_click
   ========================================================================== */

const NexAnalytics = {
  logEvent: function(eventName, params = {}) {
    console.log(`[Analytics Event] ${eventName}:`, params);
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }
  },

  trackCtaClick: function(location, label) {
    this.logEvent('cta_click', {
      location: location,
      label: label,
      page: window.location.pathname
    });
  },

  trackFormStart: function(formName) {
    this.logEvent('form_start', {
      form_name: formName,
      page: window.location.pathname
    });
  },

  trackFormSubmit: function(program, contactMethod) {
    this.logEvent('form_submit', {
      program: program,
      contact_method: contactMethod,
      timestamp: new Date().toISOString()
    });
  },

  trackProgramView: function(programName) {
    this.logEvent('program_view', {
      program_name: programName
    });
  },

  trackGuideDownload: function(domain) {
    this.logEvent('guide_download', {
      guide_name: '50-project-ideas-guide',
      interest: domain
    });
  },

  trackWhatsAppClick: function(sourceLocation) {
    this.logEvent('whatsapp_click', {
      source: sourceLocation,
      page: window.location.pathname
    });
  }
};

window.NexAnalytics = NexAnalytics;
