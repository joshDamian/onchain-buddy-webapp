import Button from './components/ui/Button.tsx';
import whatsAppWhite from './assets/whatsapp-white.svg';
import playGradient from './assets/play-gradient.svg';
import {
  BOT_WHATSAPP_LINK,
  GITHUB_REPO_LINK,
  HERO_SUB_TEXT,
  HERO_TEXT,
  SAMPLE_COMMANDS,
} from './constants/strings.ts';
import heroImage from './assets/hero.png';
import alchemy from './assets/alchemy.png';
import theGraph from './assets/thegraph.png';
import githubSvg from './assets/github.svg';
import replicate from './assets/replicate.png';
import neoX from './assets/neox.png';
import Marquee from 'react-fast-marquee';
import ExploreBot from './components/landingPage/ExploreBot.tsx';
import { goToBot, goToDemo } from './utils/navigation.ts';
import HowItWorksSteps from './components/landingPage/HowItWorksSteps.tsx';
import FeaturesList from './components/landingPage/FeaturesList.tsx';

function App() {
  return (
    <>
      <section className={'max-w-[1440px] font-nunitoSans scroll-smooth mx-auto'}>
        <section
          className={'pt-4 bg-heroBg bg-no-repeat bg-right bg-cover font-nunitoSans relative'}
        >
          <div className={'backdrop-blur-[1px] bg-[#E6E6E6]/80 absolute inset-0 z-0'} />
          <div className={'z-[50] relative'}>
            <header
              className={
                'px-5 mx-5 py-3 md:px-6 md:mx-[100px] fixed inset-x-0 top-4 z-[99] rounded-[60px] h-[70px] md:rounded-[40px] bg-opacity-40 bg-ob-extras-white md:py-4 flex justify-between lg:h-[80px] items-center backdrop-blur-[25px]'
              }
            >
              <section>
                <a
                  href={'#'}
                  className={'text-ob-primary uppercase font-righteous text-lg md:text-xl'}
                >
                  onchain buddy
                </a>
              </section>
              <nav
                className={
                  'justify-center items-center text-ob-bodyText font-bold lg:gap-[83px] hidden md:flex'
                }
              >
                <a href={'#how-it-works'} className={''}>
                  How it works
                </a>
                <a href={'#features'} className={''}>
                  Features
                </a>
                <a href={'#explore'} className={''}>
                  Explore
                </a>
              </nav>
              <section>
                <Button onClick={() => goToBot('Hello')} className={'flex items-center gap-2'}>
                  <img alt={'WhatsApp icon'} src={whatsAppWhite} width={24} height={24} />
                  <span>Say Hello</span>
                </Button>
              </section>
            </header>
            <section id={'hero'} className={'lg:pt-[180px] px-5 md:px-0 pt-[118px]'}>
              <section className={'flex text-ob-bodyText flex-col gap-[74px]'}>
                <div className={'flex flex-col gap-8 md:gap-6'}>
                  <h3
                    className={
                      'text-[28px] md:text-[52px] font-bold max-w-[830px] mx-auto text-center'
                    }
                  >
                    {HERO_TEXT}
                  </h3>
                  <p className={'text-center text-sm md:text-base max-w-[800px] mx-auto'}>
                    {HERO_SUB_TEXT}
                  </p>
                  <div className={'w-fit mx-auto flex items-center gap-[16px]'}>
                    <span className={'bg-secondaryGradient rounded-[32px] p-[1px]'}>
                      <Button
                        onClick={() => goToDemo()}
                        className={'bg-ob-extras-white h-[46px] gap-2'}
                      >
                        <img alt={'Play icon'} src={playGradient} width={24} height={24} />
                        <span className={'bg-secondaryGradient bg-clip-text text-transparent'}>
                          Watch Demo
                        </span>
                      </Button>
                    </span>
                    <Button onClick={() => goToBot('Hello')} className={'flex items-center gap-2'}>
                      <img alt={'WhatsApp icon'} src={whatsAppWhite} width={24} height={24} />
                      <span>Go to WhatsApp</span>
                    </Button>
                  </div>
                </div>

                <section className={'flex lg:px-[100px] justify-center'}>
                  <img src={heroImage} className={'w-full h-full flex-1'} alt={'bot preview'} />
                </section>
              </section>
            </section>
          </div>
        </section>
        <section className={'bg-ob-extras-offWhite flex items-center py-[25px]'}>
          <Marquee>
            <img
              alt={'Neo X logo'}
              src={neoX}
              className={'w-[144px] object-scale-down mr-[79px] opacity-60 h-[30px]'}
            />
            <img
              alt={'The Graph logo'}
              src={theGraph}
              className={'w-[144px] object-scale-down mr-[79px] opacity-60 h-[30px]'}
            />
            <img
              alt={'Alchemy logo'}
              src={alchemy}
              className={'w-[144px] object-scale-down mr-[79px] opacity-60 h-[30px]'}
            />
            <img
              alt={'Replicate logo'}
              src={replicate}
              className={'w-[144px] object-scale-down opacity-60 h-[30px]'}
            />
          </Marquee>
        </section>
        <section
          id={'how-it-works'}
          className={'lg:px-[100px] flex flex-col gap-[80px] px-5 py-10 md:py-[120px] bg-white'}
        >
          <div className={'flex flex-col gap-6'}>
            <div className={'flex justify-center'}>
              <span
                className={
                  'border-[#F67931] text-[#F67931] text-[13px] border rounded-[32px] px-3 py-2'
                }
              >
                How it works
              </span>
            </div>

            <h3
              className={
                'text-ob-bodyText text-center font-bold text-2xl md:text-[31px] max-w-[916px] mx-auto'
              }
            >
              Discover how easy it is to search for blockchain-related data using{' '}
              <span className={'text-ob-primary'}>onchain buddy</span>
            </h3>
          </div>
          <HowItWorksSteps />
        </section>
        <section
          id={'features'}
          className={
            'lg:px-[100px] flex flex-col gap-10 lg:gap-16 py-10 px-5 lg:py-[120px] bg-purpleGradient'
          }
        >
          <div className={'flex flex-col gap-6'}>
            <div className={'flex justify-left'}>
              <span
                className={
                  'border-[#F67931] text-[#F67931] text-[13px] border rounded-[32px] px-3 py-2'
                }
              >
                Features
              </span>
            </div>

            <h3
              className={
                'text-ob-bodyText text-left font-bold text-2xl md:text-[31px] max-w-[610px]'
              }
            >
              AI Integration, Wallet Event Subscriptions and Data Visualization
            </h3>
          </div>
          <FeaturesList />
        </section>
        <section id={'explore'}>
          <ExploreBot sampleCommands={SAMPLE_COMMANDS} botWhatsAppLink={BOT_WHATSAPP_LINK} />
        </section>
        <footer className={'bg-ob-extras-white font-nunitoSans'}>
          <div
            className={
              'pt-[32px] pb-10 md:pb-[53px] flex items-center px-5 md:px-[100px] justify-between'
            }
          >
            <button
              onClick={() => window.scrollTo(0, 0)}
              className={'text-ob-primary uppercase font-righteous text-xl'}
            >
              onchain buddy
            </button>
            <a target={'_blank'} rel={'noreferrer'} href={GITHUB_REPO_LINK}>
              <img src={githubSvg} alt={'GitHub logo'} width={24} height={24} />
            </a>
          </div>
          <div
            className={
              'border-t py-4 px-5 md:px-[100px] flex flex-col gap-3 md:flex-row items-center justify-between border-ob-extras-gray'
            }
          >
            <span className={'text-ob-extras-black order-2 md:order-1 text-[10px]'}>
              {new Date().getFullYear()} Onchain buddy. All rights reserved.
            </span>
            <ul
              className={
                'flex order-1 md:order-2 text-[10px] font-normal items-center gap-3 md:gap-6'
              }
            >
              <li>
                <a href={'#how-it-works'}>How it works</a>
              </li>
              <span className={'w-1 h-1 rounded-full bg-ob-extras-black'} />
              <li>
                <a href={'#features'}>Features</a>
              </li>
              <span className={'w-1 h-1 rounded-full bg-ob-extras-black'} />
              <li>
                <a href={'#explore'}>Explore</a>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
