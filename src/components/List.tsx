import { IState as IProps } from "../App";

export const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <div>
          <h2>{person.name}</h2>
          <img alt="dawd" src={person.img} />
          <p>{person.age} years old</p>
          <p>{person.note}</p>
        </div>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};
