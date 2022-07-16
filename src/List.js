import React from 'react';

const List = ({info}) => {
  return (
    <>
      {info?.map((e, i)=>{
        return(
          <div key={e.id} className="person">
            <div className='img'>
              <img src={e.image} alt={e.name} />
            </div>
            <div>
              <h4>{e.name}</h4>
              <p>{e.age} years</p>
             </div>
          </div>
        )
      })}
    </>
  );
};

export default List;
