import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Learn about Semantic Kernel',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Check out our <Link to="/tips">tips for Semantic Kernel developers</Link>!
        <br />
        <Link to="/tips"><b>https://semantickernel.dev/tips</b></Link>
      </>
    ),
  },
  {
    title: 'Adding one tip per day during month of December',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Come back every day in December 2024 to check out our new tip-of-the-day. Sometimes this
        is referred to as an Advent Calendar.
        <br />
        <Link to="/tips"><b>https://semantickernel.dev/tips</b></Link>
      </>
    ),
  },
  {
    title: 'Feedback is welcome',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Please feel free to reach out
        to
        <br />
        <i>bill</i> <em>at</em> <i>semantickernel.dev</i>
        <br />
        with any feedback or suggestions.
        <br />
        <Link to="/tips"><b>https://semantickernel.dev/tips</b></Link>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
