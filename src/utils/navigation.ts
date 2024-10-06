import { BOT_WHATSAPP_LINK } from '../constants/strings.ts';

export const goToBot = (defaultText: string = '') => {
  const link = `${BOT_WHATSAPP_LINK}?text=${defaultText}`;

  window.open(link, '_blank');
};
