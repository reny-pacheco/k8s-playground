import { useEffect, useState } from 'react';
import { BASE_URL } from './api';

const Modal = ({ setIsModalOpen, tech }) => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async (tech) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/${tech}`);
        const responseData = await response.json();
        if (!response.ok) {
          setIsLoading(false);
          setError(responseData.error);
          return;
        }
        setData(responseData);
        setError('');
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("Can't connect to server");
        console.log(error);
      }
    };

    if (tech) {
      fetchData(tech);
    }
  }, [tech]);

  return (
    <div className='back-drop'>
      <section>
        <div className='button-container'>
          <button onClick={() => setIsModalOpen()} className='close-button'>
            &times;
          </button>
        </div>
        {isLoading && <h2 style={{ paddingTop: 30 }}>Loading...</h2>}
        {!isLoading && error && (
          <h2 style={{ paddingTop: 30, color: 'red' }}>{error}</h2>
        )}
        {!isLoading && (
          <>
            <div>
              <p>
                <strong>{data.name}</strong>
                <small style={{ marginLeft: 10 }}>{data.version}</small>
              </p>
              <p>{data.description}</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Modal;
