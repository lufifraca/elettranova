(function () {
  'use strict';

  /* ---- Mobile navigation overlay ---- */
  var toggle = document.querySelector('.mobile-nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('mobile-menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768 && document.body.classList.contains('mobile-menu-open')) {
        document.body.classList.remove('mobile-menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Contact form ----
     This is a static site with no form backend: a valid submission is
     handed to the visitor's mail client, addressed to the site inbox. */
  var form = document.querySelector('.contact-form');
  if (!form) return;

  var RECIPIENT = 'info@elettranova.com';

  function setInvalid(item, message) {
    var error = item.querySelector('.field-error');
    item.classList.toggle('invalid', !!message);
    if (error) error.textContent = message || '';
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.elements.website.value) return; // honeypot

    var value = function (name) { return form.elements[name].value.trim(); };
    var reasons = Array.prototype.filter
      .call(form.querySelectorAll('input[name="reason"]'), function (box) { return box.checked; })
      .map(function (box) { return box.value; });

    var checks = [
      ['name', !value('fname') || !value('lname') ? 'First and last name are required.' : ''],
      ['email', !value('email') ? 'Email Address is required.'
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email')) ? 'Email Address is not valid.' : ''],
      ['phone', !value('phone') ? 'Phone is required.' : ''],
      ['reason', !reasons.length ? 'Reason of Inquiry is required.' : ''],
      ['message', !value('message') ? 'How Can We Help? is required.' : '']
    ];

    var firstInvalid = null;
    checks.forEach(function (check) {
      var item = form.querySelector('[data-field="' + check[0] + '"]');
      setInvalid(item, check[1]);
      if (check[1] && !firstInvalid) firstInvalid = item;
    });
    if (firstInvalid) {
      var control = firstInvalid.querySelector('input, textarea');
      if (control) control.focus();
      return;
    }

    var body = [
      'Name: ' + value('fname') + ' ' + value('lname'),
      'Email Address: ' + value('email'),
      'Phone: ' + value('phone'),
      'Reason of Inquiry: ' + reasons.join(', '),
      '',
      'How Can We Help?',
      value('message')
    ].join('\n');

    window.location.href = 'mailto:' + RECIPIENT +
      '?subject=' + encodeURIComponent('Website inquiry from ' + value('fname') + ' ' + value('lname')) +
      '&body=' + encodeURIComponent(body);

    var done = document.createElement('p');
    done.className = 'form-submitted';
    done.textContent = 'Thank you! Your message has been prepared in your email app — press send there to deliver it.';
    form.parentNode.replaceChild(done, form);
  });
})();
