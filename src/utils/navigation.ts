import { BOT_WHATSAPP_LINK, DEMO_VIDEO_LINK } from '../constants/strings.ts';

export const goToBot = (defaultText: string = '') => {
  const link = encodeURI(`${BOT_WHATSAPP_LINK}?text=${defaultText}`);

  window.open(link, '_blank');
};

export const goToDemo = () => {
  window.open(DEMO_VIDEO_LINK, '_blank');
};
