import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Chatbot from '../components/Chatbot';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const options = [
    {
      label: "Option 1",
      value: "option1",
      response: "We are in a race \n There's a turtle, a hot lady and a rabbit \n You're the hot lady ;)",
    },
    {
      label: "Option 2",
      value: "option2",
      response: "Option 2 is a turkey \n It likes to go \n GOBBLE GOBBLE GOBBLE!",
    },
    {
      label: "Option 3",
      value: "option3",
      response: "Option 3 \n Hey guys! Option 3 here \n Just an example for you and how you can use this component",
    },
    {
      label: "Option 4",
      value: "option4",
      response: "Option 4 \n You can also make new lines \n Which is cool too",
    },
  ];
  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <Chatbot options={options} />
        <div className={styles.description} style={{marginTop:'-50px'}}>
          <p>
            <p style={{textAlign:'center'}}>This Typescript component was created by <a target="_blank" href="https://sparkflame.io" style={{color:'blue', paddingTop:'5px',textDecoration:'underline'}}>Spark Security</a>
            <a target="_blank" href="https://sparkflame.io" style={{color:'black', paddingTop:'5px',textDecoration:'underline'}}>GitHub</a></p>
            <br></br><br></br>

            See the component in&nbsp;
            <code className={styles.code}>src/components/chatbot.tsx</code>
            <br></br><br></br>

            Edit the styling with&nbsp;
            <code className={styles.code}>src/styles/chatbot.css</code>

            <br></br><br></br>
            <hr></hr>
            <br></br><br></br>
            This source is currently in&nbsp;
            <code className={styles.code}>v0.1.2</code>
             <br></br><br></br>

             To use, copy the chatbot.tsx and chatbot.css files into your project
             <br></br><br></br>
              Add the following to the page you wish to add the widget in:
             <br></br><br></br>
             <code className={styles.code} style={{color:'blue'}}>{`import`}</code><code className={styles.code} style={{color:'purple'}}>{` Chatbot`}</code><code className={styles.code} style={{color:'blue'}}>{` from`}</code><code className={styles.code} style={{color:'green'}}>{` 'path/to/chatbot.tsx'`}</code>;
             <br></br><br></br>
             <code className={styles.code} style={{color:'purple'}}>{`const `}</code><b>options = [</b>
               <br></br>
               <code className={styles.code} style={{color:'green', paddingLeft:'20px'}}>
{`{label: "Option 1", value: "option1", response: "Hey! This is option 1", },`}</code>
<br></br>
<code className={styles.code} style={{color:'green', paddingLeft:'20px'}}>
{`{label: "Option 2", value: "option2", response: "Yo! This is option 2", },`}</code>
               <br></br>
               <code className={styles.code}>{`
             ];`}
             </code>
             <br></br><br></br>
             And in your return () area:
            <br></br><br></br>
             <code className={styles.code} style={{color:'blue'}}>{`<Chatbot `}</code><code className={styles.code} style={{color:'purple'}}>{`options`}</code><code className={styles.code}>{`={options}`}</code><code className={styles.code} style={{color:'blue'}}>{` />`}</code>
             <br></br><br></br>
              You can add as many options as you'd like :)
          </p>
          <div>
            <a
              href="https://sparkflame.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/spark-logo.PNG"
                className={styles.vercelLogo}
                width={300}
                height={135}
		alt={'spark logo'}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
