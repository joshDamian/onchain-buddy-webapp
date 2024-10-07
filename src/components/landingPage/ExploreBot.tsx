import React, { FC, useState } from 'react';
import Button from '../ui/Button.tsx';
import QRCode from 'react-qr-code';
import { twMerge } from 'tailwind-merge';

type ExploreBotProps = {
  sampleCommands: string[];
  botWhatsAppLink: string;
};

const COMMAND_BG_CLASSES = [
  'bg-ob-extras-offWhite2',
  'bg-ob-extras-offGreen',
  'bg-ob-extras-offWhite3',
];

const ExploreBot: FC<ExploreBotProps> = ({ sampleCommands, botWhatsAppLink }) => {
  const [question, setQuestion] = useState('');

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const dynamicBotUrl = encodeURI(`${botWhatsAppLink}?text=${question}`);

  return (
    <section className={'lg:p-[100px] font-nunitoSans bg-white flex gap-[44px]'}>
      <section className={'flex flex-col gap-[44px] lg:max-w-[743px] w-full'}>
        <div className={'flex flex-col gap-6'}>
          <h3 className={'text-ob-bodyText font-bold text-[32px] leading-[43.65px]'}>
            Ask the Bot <span className={'text-ob-primary'}>Anything,</span> Right Now!
          </h3>
          <p className={'max-w-[634px]'}>
            Curious about your wallet balance or transactions? Type your question below, and our
            WhatsApp bot will answer. Scan the QR code to get started!
          </p>
        </div>
        <div className={'flex flex-col gap-5'}>
          <form
            className={
              'bg-ob-extras-white rounded-[32px] h-[72px] max-w-[634px] flex lg:items-center gap-3 py-3 pr-3 pl-6'
            }
            onSubmit={(e) => {
              e.preventDefault();
              window.open(dynamicBotUrl, '_blank');
            }}
          >
            <input
              type={'text'}
              placeholder={'Type your question here'}
              className={'w-full border-none bg-transparent outline-none'}
              required={true}
              value={question}
              onChange={handleQuestionChange}
            />
            <Button className={'shrink-0 w-fit'} type={'submit'}>
              Ask the Bot
            </Button>
          </form>
          <div className={'flex flex-wrap gap-2.5'}>
            {sampleCommands.map((command, index) => (
              <a
                href={`${botWhatsAppLink}?text=${command}`}
                target={'_blank'}
                rel={'noreferrer'}
                key={index}
                className={twMerge(
                  'truncate p-3 shadow-[0px_4px_4px_0px_#0000001A] max-w-[296px] rounded-2xl',
                  COMMAND_BG_CLASSES[index]
                )}
              >
                {command}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className={'flex flex-col gap-[22px]'}>
        <QRCode value={dynamicBotUrl} size={378} className={'rounded-[32px]'} fgColor={'#3B3B3B'} />
        <div className={'text-center text-ob-bodyText2 text-[16px]'}>
          Scan to Chat with the Bot on WhatsApp!
        </div>
      </div>
    </section>
  );
};

export default ExploreBot;
