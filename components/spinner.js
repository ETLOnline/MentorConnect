function Spinner() {
  return (
    <div className="flex items-center justify-center space-x-2 h-auto max-w-full">
      <img
        src="/img/Loading.gif"
        className="object-contain h-60 object-cover"
      ></img>
    </div>
  );
}

export default Spinner;
