type IProps = {
  title: string
}

export const Header = (props: IProps) => {

  return (
    <header>
      <h2>{props.title}</h2>
    </header>
  )
}