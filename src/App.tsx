import { useState, type KeyboardEvent, type ReactNode } from 'react'

import { portfolio } from './data/portfolio'



type LinkButtonProps = {

  href: string

  children: ReactNode

  secondary?: boolean

  newTab?: boolean

  small?: boolean

}



function LinkButton({

  href,

  children,

  secondary = false,

  newTab,

  small = false,

}: LinkButtonProps) {

  const className = [

    'button',

    secondary ? 'button--secondary' : '',

    small ? 'button--small' : '',

  ]

    .filter(Boolean)

    .join(' ')



  const shouldOpenNewTab =

    newTab ?? (!href.startsWith('#') && !href.startsWith('mailto:'))



  return (

    <a

      className={className}

      href={href}

      target={shouldOpenNewTab ? '_blank' : undefined}

      rel={shouldOpenNewTab ? 'noopener noreferrer' : undefined}

    >

      {children}

    </a>

  )

}



function SectionHeading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {

  return (

    <div className="section-heading">

      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {note && <p>{note}</p>}

    </div>

  )

}



function flipOnKeyboard(event: KeyboardEvent<HTMLDivElement>, toggle: () => void) {

  if (event.key !== 'Enter' && event.key !== ' ') return

  if ((event.target as HTMLElement).closest('a')) return

  event.preventDefault()

  toggle()

}



type Photo = {

  src: string

  caption?: string

}



function PhotoGrid({ photos, className = '' }: { photos: Photo[]; className?: string }) {

  const visiblePhotos = photos.slice(0, 2)

  const classes = [

    'photo-grid',

    visiblePhotos.length === 1 ? 'photo-grid--single' : '',

    className,

  ]

    .filter(Boolean)

    .join(' ')



  return (

    <div className={classes}>

      {visiblePhotos.map((photo, index) => (

        <figure className="photo-tile" key={`${photo.caption ?? 'photo'}-${index}`}>

          {photo.src ? (

            <img src={photo.src} alt={photo.caption ?? ''} />

          ) : (

            <div className="photo-tile-placeholder">

              <span>♡</span>

              <small>add photo</small>

            </div>

          )}

          {photo.caption && <figcaption>{photo.caption}</figcaption>}

        </figure>

      ))}

    </div>

  )

}



function FlipAboutMain() {

  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((value) => !value)

  const photos: Photo[] = [

    { src: '/wcs_retreat.png', caption: 'WCS (Women in Computer Science) community ♡' },

    { src: '/salesforce.png', caption: 'Salesforce Internship Cruise' },

  ]



  return (

    <div

      className={`about-main-flip ${flipped ? 'is-flipped' : ''}`}

      role="button"

      tabIndex={0}

      aria-pressed={flipped}

      onClick={toggle}

      onKeyDown={(event) => flipOnKeyboard(event, toggle)}

    >

      <div className="about-main-flip-inner">

        <article className="about-main about-main-front card paper-card">

          <p className="big-copy">

            I care about making software that works well, but I also care about how it <em>feels</em> to use.

          </p>

          <p>

            I’m drawn to the space where engineering meets design: taking something from a rough idea or sketch,

            shaping the experience, and then figuring out how to build it cleanly.

          </p>

          <p>

            I’m a senior studying {portfolio.education.degree} at {portfolio.education.school}, with a {portfolio.education.extra.toLowerCase()}. Outside class, I’m usually somewhere

            between a coding project, a WCS event, a run, a scrapbook page, or my sticker shop.

          </p>

          <p className="education-note">{portfolio.education.graduation} · GPA {portfolio.education.gpa}</p>

          <div className="value-row">

            {portfolio.values.map((value) => (

              <span key={value}>{value}</span>

            ))}

          </div>

        </article>



        <article className="about-main about-main-back card paper-card">

          <PhotoGrid photos={photos} className="about-main-photo-grid" />

        </article>

      </div>

    </div>

  )

}



function FlipMiniCard({ item }: { item: (typeof portfolio.about)[number] }) {

  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((value) => !value)



  return (

    <div

      className={`mini-card-flip ${flipped ? 'is-flipped' : ''}`}

      role="button"

      tabIndex={0}

      aria-pressed={flipped}

      onClick={toggle}

      onKeyDown={(event) => flipOnKeyboard(event, toggle)}

    >

      <div className="mini-card-flip-inner">

        <article className="mini-card mini-card-front">

          <div className="mini-card-emoji">{item.emoji}</div>

          <h3>{item.title}</h3>

          <p>{item.body}</p>

        </article>



        <article className="mini-card mini-card-back">

          <PhotoGrid photos={item.images} className="mini-card-photo-grid" />

        </article>

      </div>

    </div>

  )

}



function ProjectFlipCard({ project }: { project: (typeof portfolio.projects)[number] }) {

  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((value) => !value)



  return (

    <div

      className={`project-flip ${project.featured ? 'project-flip--featured' : ''} ${flipped ? 'is-flipped' : ''}`}

      role="button"

      tabIndex={0}

      aria-pressed={flipped}

      onClick={(event) => {

        if ((event.target as HTMLElement).closest('a')) return

        toggle()

      }}

      onKeyDown={(event) => flipOnKeyboard(event, toggle)}

    >

      <div className="project-flip-inner">

        <article className={`project-card project-card-front ${project.featured ? 'project-card--featured' : ''}`}>

          <div className="project-topline">

            <span>{project.kicker}</span>

            <span>↗</span>

          </div>



          <div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p className="project-detail">{project.details}</p>

            <PhotoGrid photos={project.images} className="project-image-strip" />

          </div>



          <div className="project-front-footer">

            <div className="tag-row">

              {project.tags.map((tag) => (

                <span key={tag}>{tag}</span>

              ))}

            </div>



            {project.links.length > 0 && (

              <div className="card-actions">

                {project.links.map((link) => (

                  <LinkButton href={link.href} secondary small key={link.href}>

                    {link.label}

                  </LinkButton>

                ))}

              </div>

            )}

          </div>

        </article>



        <article className={`project-card project-card-back ${project.featured ? 'project-card--featured' : ''}`}>

          <div>

            <div className="project-topline">

              <span>{project.kicker}</span>

              <span>♡</span>

            </div>

            <h3>{project.backTitle}</h3>

            <ul className="card-bullets project-back-bullets">

              {project.backBullets.map((bullet) => (

                <li key={bullet}>{bullet}</li>

              ))}

            </ul>

            <p className="project-back-meta">{project.backMeta}</p>

          </div>

        </article>

      </div>

    </div>

  )

}



function CommunityFlipCard({ item }: { item: (typeof portfolio.community)[number] }) {

  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((value) => !value)

  const frontImage = item.imagePlacement === 'front' && item.images.length > 0

  const backImage = item.imagePlacement === 'back' && item.images.length > 0



  return (

    <div

      className={`community-flip ${frontImage ? 'community-flip--image-front' : ''} ${flipped ? 'is-flipped' : ''}`}

      role="button"

      tabIndex={0}

      aria-pressed={flipped}

      onClick={(event) => {

        if ((event.target as HTMLElement).closest('a')) return

        toggle()

      }}

      onKeyDown={(event) => flipOnKeyboard(event, toggle)}

    >

      <div className="community-flip-inner">

        <article className="community-card community-card-front">

          <span className="pin">●</span>

          <h3>{item.title}</h3>

          <p>{item.body}</p>



          {frontImage && (

            <PhotoGrid photos={item.images} className="community-photo-grid community-photo-grid--front" />

          )}



          <div className="tag-row community-tags">

            {item.tags.map((tag) => (

              <span key={tag}>{tag}</span>

            ))}

          </div>



          {item.links.length > 0 && (

            <div className="card-actions">

              {item.links.map((link) => (

                <LinkButton href={link.href} secondary small key={link.href}>

                  {link.label}

                </LinkButton>

              ))}

            </div>

          )}

        </article>



        <article className="community-card community-card-back">

          <div>

            <h3>{item.title}</h3>

            <ul className="card-bullets community-back-bullets">

              {item.backBullets.map((bullet) => (

                <li key={bullet}>{bullet}</li>

              ))}

            </ul>



            {backImage && (

              <PhotoGrid photos={item.images} className="community-photo-grid community-photo-grid--back" />

            )}

          </div>

        </article>

      </div>

    </div>

  )

}



function PublicationFlipCard() {

  const [flipped, setFlipped] = useState(false)

  const toggle = () => setFlipped((value) => !value)



  return (

    <div

      className={`research-flip ${flipped ? 'is-flipped' : ''}`}

      role="button"

      tabIndex={0}

      aria-pressed={flipped}

      onClick={(event) => {

        if ((event.target as HTMLElement).closest('a')) return

        toggle()

      }}

      onKeyDown={(event) => flipOnKeyboard(event, toggle)}

    >

      <div className="research-flip-inner">

        <article className="research-card paper-card research-card-front">

          <span className="eyebrow">research note</span>

          <h3>{portfolio.publication.title}</h3>

          <p className="publication-meta">

            {portfolio.publication.authors} · {portfolio.publication.venue}

          </p>

          <p>{portfolio.publication.summary}</p>

          <div className="card-actions">

            <LinkButton href={portfolio.publication.link} secondary small>

              view publication ↗

            </LinkButton>

          </div>

        </article>



        <article className="research-card paper-card research-card-back">

          <span className="eyebrow">research details</span>

          <h3>{portfolio.publication.title}</h3>

          <ul className="card-bullets publication-bullets">

            {portfolio.publication.backBullets.map((bullet) => (

              <li key={bullet}>{bullet}</li>

            ))}

          </ul>

        </article>

      </div>

    </div>

  )

}



function AwardsCard() {

  const [selectedAward, setSelectedAward] = useState<number | null>(null)



  return (

    <div className="awards-card paper-card">

      <span className="eyebrow">selected little wins</span>

      <div className="awards-list awards-list--static">

        {portfolio.awards.map((item, index) => {

          const isOpen = selectedAward === index



          return (

            <div

              className={`award-dropdown-row ${isOpen ? 'is-open' : ''}`}

              key={item.title}

            >

              <button

                className={`award-item award-summary ${isOpen ? 'is-open' : ''}`}

                type="button"

                aria-expanded={isOpen}

                onClick={() => setSelectedAward(isOpen ? null : index)}

              >

                <span className="award-title">{item.title}</span>

                <span className="award-plus">+</span>

              </button>



              {isOpen && (

                <div className="award-inline-dropdown">

                  <p className="award-meta">{item.issuer} · {item.date}</p>

                  {item.description.map((paragraph) => (

                    <p key={paragraph}>{paragraph}</p>

                  ))}

                </div>

              )}

            </div>

          )

        })}

      </div>

    </div>

  )

}



function App() {

  return (

    <div className="site-shell">

      <div className="page-sparkle page-sparkle--one">✦</div>

      <div className="page-sparkle page-sparkle--two">♡</div>

      <div className="page-sparkle page-sparkle--three">✿</div>



      <header className="nav-wrap">

        <a href="#top" className="logo" aria-label="Michelle Sun home">

          my portfolio <span>♡</span>

        </a>

        <nav className="nav" aria-label="Main navigation">

          <a href="#about">about me</a>

          <a href="#work">work</a>

          <a href="#projects">projects</a>

          <a href="#more">community</a>

          <a href="#contact">contact</a>

        </nav>

      </header>



      <main id="top">

        <section className="hero section">

          <div className="hero-copy">

            <div className="hero-note">hello hello! I’m</div>

            <h1>

              Michelle <em>Sun</em>

            </h1>

            <p className="hero-headline">{portfolio.headline}</p>

            <p className="hero-intro">{portfolio.intro}</p>

            <div className="hero-actions">

                <LinkButton href="#projects">

                  see what I make ↓

                </LinkButton>



                <LinkButton href={portfolio.links.resume} secondary newTab>

                  resume ↗

                </LinkButton>



                <LinkButton href={portfolio.links.github} secondary newTab>

                  GitHub ↗

                </LinkButton>

            </div>

            <div className="tiny-status">

              <span className="status-dot" /> UIUC CS senior · {portfolio.education.graduation} · building, learning, creating

            </div>

          </div>



          <div className="hero-collage" aria-label="Personal photo">

            <div className="tape tape--top" />

            <div className="polaroid">

              <div className="photo-placeholder">

                <img src={portfolio.heroImage} alt="Michelle Sun" />

              </div>

              <p>currently: making something cute & useful</p>

            </div>

            <div className="doodle doodle--heart">♡</div>

            <div className="doodle doodle--star">✦</div>

            <div className="mini-note">code + design + community</div>

          </div>

        </section>



        <section className="ticker" aria-label="Fun facts">

          <div className="ticker-track">

            {[...portfolio.funFacts, ...portfolio.funFacts].map((fact, i) => (

              <span key={`${fact}-${i}`}>♡ {fact}</span>

            ))}

          </div>

        </section>



        <section className="section" id="about">

          <SectionHeading eyebrow="01 · about" title="The person behind the code" note="Click each card to learn more :)" />

          <div className="about-grid">

            <FlipAboutMain />



            <div className="about-small-grid">

              {portfolio.about.map((item) => (

                <FlipMiniCard item={item} key={item.title} />

              ))}

            </div>

          </div>

        </section>



        <section className="section" id="work">

          <SectionHeading eyebrow="02 · experience" title="Things I’ve worked on" note="Technical work, team work, and all the learning in between." />

          <div className="experience-list">

            {portfolio.experience.map((item, index) => (

              <article className="experience-row" key={item.company}>

                <div className="experience-number">0{index + 1}</div>

                <div>

                  <div className="experience-heading">

                    <div>

                      <p className="experience-company">{item.company}</p>

                      <h3>{item.role}</h3>

                    </div>

                    <div className="experience-meta">

                      <span>{item.dates}</span>

                      <span>{item.location}</span>

                    </div>

                  </div>

                  <p>{item.summary}</p>

                  <ul className="experience-bullets">

                    {item.bullets.map((bullet) => (

                      <li key={bullet}>{bullet}</li>

                    ))}

                  </ul>

                </div>

              </article>

            ))}

          </div>

        </section>



        <section className="section" id="projects">

          <SectionHeading eyebrow="03 · selected projects" title="Built with code, curiosity & a lot of tabs open" note="Click a card to flip it over for more information." />

          <div className="project-grid">

            {portfolio.projects.map((project) => (

              <ProjectFlipCard project={project} key={project.title} />

            ))}

          </div>

        </section>



        <section className="section" id="more">

          <SectionHeading eyebrow="04 · community + extras" title="The rest matters too" note="Leadership, creative work, research, and the things that shaped me." />

         <div className="more-grid">
          <div className="community-column">
            {portfolio.community.map((item) => (
              <CommunityFlipCard item={item} key={item.title} />
            ))}
          </div>

          <div className="more-right-column">
            <PublicationFlipCard />

            <AwardsCard />
          </div>
        </div>

        </section>



        <section className="section skills-section">

          <SectionHeading eyebrow="05 · toolkit" title="Tools I reach for" note="Tools and languages I’ve worked with so far — plus probably a few I’m forgetting." />

          <div className="skills-grid">

            {Object.entries(portfolio.skills).map(([group, skills]) => (

              <div className="skills-card" key={group}>

                <h3>{group}</h3>

                <div className="skills-list">

                  {skills.map((skill) => (

                    <span key={skill}>{skill}</span>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>



        <section className="contact-section section" id="contact">

          <div className="contact-card">

            <span className="contact-doodle">♡</span>

            <p className="eyebrow">06 · say hi</p>

            <h2>Anything you want to ask me?</h2>

            <p>

              I’m always happy to talk about software, design, creative projects, student communities, or your favorite matcha order.

            </p>

            <div className="hero-actions">

              <LinkButton href={`mailto:${portfolio.links.email}`}>email me</LinkButton>

              <LinkButton href={portfolio.links.resume} secondary>

                Resume ↗

              </LinkButton>

              <LinkButton href={portfolio.links.linkedin} secondary>

                LinkedIn ↗

              </LinkButton>

            </div>

          </div>

        </section>

      </main>



      <footer>

        <p>designed + coded with too much pink by {portfolio.name} ♡</p>

        <p>React · TypeScript · GitHub Pages</p>

      </footer>

    </div>

  )

}



export default App
