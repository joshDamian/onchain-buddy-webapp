import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../ui/Button.tsx';
import { goToBot } from '../../utils/navigation.ts';
import arrowWhite from '../../assets/arrow-white.svg';
import sayHello from '../../assets/howItWorks/say-hello.png';
import makeQuery from '../../assets/howItWorks/make-query.png';
import getAnswers from '../../assets/howItWorks/get-answers.png';

type Steps = {
  title: string;
  description: string;
  image: string;
};

const HowItWorksSteps: FC = () => {
  const steps: Array<Steps> = [
    {
      title: 'Say Hello!',
      description:
        'Say hello to the bot and follow the instructions to get started. The bot will guide you through the process.',
      image: sayHello,
    },
    {
      title: 'Make a Query',
      description:
        "Send a message to the bot describing what you're looking for on the blockchain—whether it's wallet balances, transactions, or specific on-chain data.",
      image: makeQuery,
    },
    {
      title: 'Get Simplified Answers',
      description:
        "The bot will deliver easy-to-understand blockchain data, whether it's wallet balances or transaction details",
      image: getAnswers,
    },
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={'grid grid-cols-2 gap-16 text-ob-bodyText'}>
      <div
        className={
          'bg-ob-extras-white flex flex-col gap-16 text-ob-bodyText font-normal rounded-[32px] px-6 pt-6'
        }
      >
        <p>{steps[activeStep].description}</p>
        <img
          className={'max-w-[296px] mx-auto'}
          src={steps[activeStep].image}
          alt={steps[activeStep].title}
        />
      </div>
      <div className={'flex flex-col justify-between'}>
        <div className={'flex flex-col gap-4'}>
          {steps.map((step, index) => (
            <button
              key={index}
              className={twMerge(
                'text-[31px] flex gap-[43px] font-bold text-[#B3B3B3]',
                activeStep === index && 'text-ob-bodyText'
              )}
              onClick={() => setActiveStep(index)}
            >
              <span>0{index + 1}</span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        <div className={'flex flex-col gap-6'}>
          <span>Use Onchain Buddy — No sign-up required!</span>
          <Button className={'flex items-center gap-2.5'} onClick={() => goToBot('Hello 👋')}>
            <span>Try it now</span>
            <img src={arrowWhite} alt={'Arrow'} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSteps;
