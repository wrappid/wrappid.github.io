import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/wrappid_logo_full.svg').default,
    description: (
      <>
        Wrappid was designed from the ground up to easily create your app and
        to focus on what matters
      </>
    ),
  },
  {
    title: 'Code once, build for all!',
    Svg: require('@site/static/img/wrappid_logo_full.svg').default,
    description: (
      <>
        Power your project with wrappid, code once, and we&apos;ll do the chores to build for Web, Android and Web. Go
        ahead and get started with wrappid.
      </>
    ),
  },
  {
    title: 'Community Driven',
    Svg: require('@site/static/img/wrappid_logo_full.svg').default,
    description: (
      <>
        Wrappid is Open Source Framework, community driven,
        powered by React and React-Navite.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
