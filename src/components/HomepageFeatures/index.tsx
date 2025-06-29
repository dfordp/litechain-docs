import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Updated features for Litechain
const FeatureList = [
  {
    title: 'Unified LLM API',
    description: (
      <>
        Use OpenAI, Gemini, Claude, and Groq with a single, ergonomic API. No
        more juggling multiple SDKs or types.
      </>
    ),
  },
  {
    title: 'Tool Calling & Chaining',
    description: (
      <>
        Register custom tools/functions and let the LLM call them automatically.
        Chain multiple LLMs for complex workflows.
      </>
    ),
  },
  {
    title: 'Streaming, Budget, & State',
    description: (
      <>
        Real-time streaming, built-in budget tracking, and full conversation
        state/history for robust, production-ready agents.
      </>
    ),
  },
];

function Feature({title, description}: {title: string; description: ReactNode}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
