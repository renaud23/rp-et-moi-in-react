function Link({ href, name }) {
  return (
    <a className="lien" href={href}>
      {name}
    </a>
  );
}

export default Link;
