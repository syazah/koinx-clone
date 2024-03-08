import styles from "./ConSix.module.css";

const data = [
  {
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Smith",
    post: "Designation here",
    para: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Elina Williams",
    post: "Designation here",
    para: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    img: "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Carl Hanson",
    post: "Designation here",
    para: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];
function ConSix() {
  return (
    <div className={styles.consix}>
      <h1>Team</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
        neque. Hic nostrum, autem labore nisi modi consequatur odit, soluta
        earum itaque veniam culpa cumque vero! Repellat ipsum voluptate sit
        alias.
      </p>
      {data.map((el, i) => (
        <Card key={i} data={el} />
      ))}
    </div>
  );
}

function Card({ data }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={data.img} />
        <h4>{data.name}</h4>
        <h6>{data.post}</h6>
      </div>
      <div className={styles.textcontent}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vel,
        perferendis consequuntur consectetur, eaque nulla, aliquam voluptatum
        ipsum eveniet accusantium voluptatibus quam alias accusamus laudantium
        eos omnis? Architecto, minus officiis.
      </div>
    </div>
  );
}

export default ConSix;
