function Project(props) {
  return (
    <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border">
      <img className="mb-2" src={props.image} alt={props.alt} />
      <div className="rounded-lg p-4 bg-main flex flex-col">
        <div>
          <h4 className="text-white text-2xl font-bold leading-none ">
            {props.title}
          </h4>
          <span className="text-xs text-gray-200 leading-none">
            {props.subtitle}
          </span>
        </div>
        <div className="flex items-center">
          <div className="text-lg text-white font-light">234</div>
        </div>
      </div>
    </div>
  );
}
