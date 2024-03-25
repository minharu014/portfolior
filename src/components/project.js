function Project(props) {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border bg-gray-300">
      <img className="mb-2 h-4/5" src={props.image} alt={props.altText} />
      <a href={props.url} className="rounded-lg p-4 bg-main flex flex-col">
        <div>
          <h4 className="text-white text-xl font-bold leading-none pb-2">
            {props.title}
          </h4>
          <span className="text-s text-gray-200 leading-none">
            {props.subtitle}
          </span>
        </div>
      </a>
    </div>
  );
}

export default Project;
