const PostPage = async (props) => {
  // Await explícito del objeto params
  const params = await props.params;
  console.log(params.id)

  return (
    <>
      <div>PostPage</div>
      <h1>{params.id}</h1>
    </>
  );
};

export default PostPage;