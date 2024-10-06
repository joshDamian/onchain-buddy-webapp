import { FC, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Button from '../ui/Button.tsx';
import { goToBot } from '../../utils/navigation.ts';
import arrowWhite from '../../assets/arrow-white.svg';

type Steps = {
  title: string;
  description: string;
  image: string;
};

const HowItWorksSteps: FC = () => {
  const steps: Array<Steps> = [
    {
      title: 'Say Hello!',
      description: 'Say hello to the bot and follow the instructions to get started.',
      image: '',
    },
    {
      title: 'Make a Query',
      description: 'Ask the bot any question about your wallet balance or transactions.',
      image: 'replicate',
    },
    {
      title: 'Get Simplified Answers',
      description: 'Get instant answers from the bot on your WhatsApp.',
      image: 'thegraph',
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
        <img src={steps[activeStep].image} alt={steps[activeStep].title} />
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
