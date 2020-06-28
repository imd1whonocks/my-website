import Head from 'next/head'

import styles from './index.module.scss';
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon } from '../src/shared/icons';

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Shashank Kumar Singh</title>
        <link rel="icon" href="images/favicon.jpg" />
      </Head>
      <div className={styles.name}>
        <div className={styles.fullname}>Shashank Kumar Singh</div>
        <div className={styles.designation}>Software Engineer</div>
      </div>
      <div className={styles.contact}>
        <div className={styles.item}>
          <MailIcon className={styles.icon} />
          <span className={styles.desc} ><a target="_blank" href="mailto:shashank2410@gmail.com">shashank2410@gmail.com</a></span>
        </div>
        <div className={styles.item}>
          <PhoneIcon className={styles.icon} />
          <span className={styles.desc} ><a target="_blank" href="tel:+919872549514">9872549514</a></span>
        </div>
        <div className={styles.item}>
          <LinkedinIcon className={styles.icon} />
          <span className={styles.desc} ><a target="_blank" href="https://www.linkedin.com/in/sksingh24/">sksingh24</a></span>
        </div>
        <div className={styles.item}>
          <GithubIcon className={styles.icon} />
          <span className={styles.desc} ><a target="_blank" href="https://github.com/imd1whonocks">imd1whonocks</a></span>
        </div>
      </div>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
