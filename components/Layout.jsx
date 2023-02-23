import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import utilStyles from '../styles/util.module.css'
import Image from 'next/image'
import Link from "next/link"

const name = 'WEB'


const Layout = ({children, title, description, home}) => {
  return (

    <div className={styles.container}>

      <Head>
      
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap" rel="stylesheet"/>
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/img/1.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      <nav>
            <Link href='/'>Inicio | </Link>
            <Link href='/blog'>Blog | </Link>
            <Link href='/about'>About | </Link>
            <Link href='/contact'>Contac | </Link>
      </nav>

      <main>
        {children}
      </main>

  
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}

    </div>
  )
}

export default Layout

