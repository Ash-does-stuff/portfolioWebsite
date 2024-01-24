import MusicDataCard from "./MusicDataCard";

interface Props {
  data: any;
  type: string;
}

function CardContainer(props: Props) {
  const cards = () => {
    let i = 0;
    return props.data.map((obj: any) => {
      i++;

      let title = obj.score ? obj.album.name:obj.name;
      let img = obj.album ? obj.album.image.url:obj.image.url
      if (props.type !== "Artists") {
        let artists = obj.album.artists.map((obj: any) => obj.name)
        return (
            <MusicDataCard key={i} type={props.type} id={i} title={title} artists={artists} img={img}/>
          )
    }
      
      return (
        <MusicDataCard key={i} type={props.type} id={i} title={title} img={img}/>
      )
    });
  };

  return (
    <div className="column cardContainer evenSpacing preset-fadeInBottom">
      <h2 style={{fontSize: "2vw"}}>{props.type + ": "}</h2>
      {cards()}
    </div>
  );
}

export default CardContainer;
