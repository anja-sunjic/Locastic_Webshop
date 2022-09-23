type Props = {
  href?: string;
  name?: string;
};

const Button = ({ href, name }: Props) => {
  return (
    <a className="_button" href={href}>
      <span>{name}</span>
    </a>
  );
};

export default Button;
