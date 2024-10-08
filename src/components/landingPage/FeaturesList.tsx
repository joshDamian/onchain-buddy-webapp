import { FC } from 'react';
import aiIntegration from '../../assets/features/ai-integration.png';
import notifications from '../../assets/features/notifications.png';
import dataVisualization from '../../assets/features/data-visualization.png';

const FEATURES = {
  AI_INTEGRATION: {
    description:
      "Reduce the amount of steps needed to retrieve data. Onchain Buddy's AI integration allows you to ask questions in natural language and get the data you need.",
    image: aiIntegration,
  },
  WALLET_EVENT_SUBSCRIPTIONS: {
    description:
      'Get real time updates on your wallet balance and transactions. Subscribe to events and get notified when they occur.',
    image: notifications,
  },
  DATA_VISUALIZATION: {
    description:
      'Visualize your data in a way that makes sense to you. Onchain Buddy provides you with the tools to create custom dashboards and graphs.',
    image: dataVisualization,
  },
};

const FeaturesList: FC = () => {
  return (
    <section className={'grid grid-cols-12 gap-5 text-ob-bodyText2'}>
      <div
        className={
          'col-span-12 md:col-span-7 bg-ob-extras-white/50 flex-col flex gap-16 px-6 pt-6 rounded-[32px]'
        }
      >
        <p className={'text-base max-w-[457px] font-normal'}>
          {FEATURES.AI_INTEGRATION.description}
        </p>
        <img src={FEATURES.AI_INTEGRATION.image} alt={'AI Integration'} />
      </div>
      <div
        className={
          'col-span-12 md:col-span-5 bg-ob-extras-white/50 flex-col flex gap-16 px-6 pt-6 rounded-[32px]'
        }
      >
        <p className={'text-base max-w-[457px] font-normal'}>
          {FEATURES.WALLET_EVENT_SUBSCRIPTIONS.description}
        </p>
        <img src={FEATURES.WALLET_EVENT_SUBSCRIPTIONS.image} alt={'Wallet Event Subscriptions'} />
      </div>
      <div
        className={
          'col-span-12 bg-ob-extras-white/50 bg-dataVisualizationBg flex-col flex gap-16 p-6 rounded-[32px]'
        }
      >
        <p className={'text-base max-w-[686px] text-center mx-auto font-normal'}>
          {FEATURES.DATA_VISUALIZATION.description}
        </p>
        <img src={FEATURES.DATA_VISUALIZATION.image} alt={'Data Visualization'} />
      </div>
    </section>
  );
};

export default FeaturesList;
