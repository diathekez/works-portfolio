import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Copyright © 2022 Bryan Granados</span>
        <span>
          Built with{' '}
          <ExtLink href="https://github.com/ijjk/notion-blog">
            Next.js
          </ExtLink>
        </span>
      </footer>
    </>
  )
}
