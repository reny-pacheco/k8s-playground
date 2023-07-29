function Techs({ tech, setTech, setIsModalOpen }) {
  return (
    <div
      className='tech'
      onClick={() => {
        setTech(tech.id);
        setIsModalOpen();
      }}
    >
      {tech.name}
    </div>
  );
}

export default Techs;
