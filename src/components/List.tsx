import { PropsData } from "../data";

const List = ({ people }: any) => {
  return (
    <>
      {people.map((person: PropsData) => {
        const { id, name, age, image } = person;
        return (
          <article
            className="grid grid-cols-4 gap-3 mb-6 items-center"
            key={id}
          >
            <img
              className="w-20 h-20 object-cover rounded-full shadow-md"
              src={image}
              alt={name}
            />
            <div className="col-span-3">
              <h4 className="mb-1 font-bold tracking-wider">{name}</h4>
              <p className="mb-0 text-gray-500">{age} anos</p>
            </div>
          </article>
        );
      })}
    </>
  );
};
export default List;
