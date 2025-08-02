// sent to Google Analytics
export const trackEvent = (parameters: {
  name: (typeof EVENT_NAME)[keyof typeof EVENT_NAME];
  page: (typeof PAGE)[keyof typeof PAGE];
  section: (typeof SECTION)[keyof typeof SECTION];
}) => {
  if (!!window?.gtag) {
    window.gtag('event', parameters.name, {
      page: parameters.page,
      section: parameters.section,
    });
  }
};

export const EVENT_NAME = {
  FOREFRONT_ICON_CLICK: 'forefront_icon_click',
  DONATE_BUTTON_CLICK: 'donate_button_click',
  LEARN_MORE_BUTTON_CLICK: 'learn_more_button_click',
  VIEW_REPORT_BUTTON_CLICK: 'view_report_button_click',
  GET_INVOLVED_BUTTON_CLICK: 'get_involved_button_click',
  BUY_TICKET_BUTTON_CLICK: 'buy_ticket_button_click',
  BECOME_A_SPONSOR_BUTTON_CLICK: 'become_a_sponsor_button_click',
  SPONSORSHIP_LEARN_MORE_BUTTON_CLICK: 'sponsorship_learn_more_button_click',
  GALA_DONATE_BUTTON_CLICK: 'gala_donate_button_click',
  SIGN_UP_BUTTON_CLICK: 'sign_up_button_click',
} as const;

export const PAGE = {
  HOME: 'home',
  APPROACH: 'approach',
  ABOUT: 'about',
  GALA: 'gala',
} as const;

export const SECTION = {
  HEADER: 'header',
  FOOTER: 'footer',
  HERO: 'hero',
  CHANGEMAKERS: 'changemakers',
  PLATINUM_TRANSPARENCY: 'platinum_transparency',
  CHANGE_THE_WORLD: 'change_the_world',
  GALA_ACTIONS: 'gala_actions',
} as const;

export const PATHNAME_TO_PAGE = {
  '/': PAGE.HOME,
  '/approach': PAGE.APPROACH,
  '/about': PAGE.ABOUT,
  '/gala': PAGE.GALA,
} as const;
