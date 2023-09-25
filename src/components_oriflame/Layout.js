function DefaultLayout(props) {
  return (
    <div>
      <main className="main">{props.children}</main>
    </div>
  );
}

export default DefaultLayout;
