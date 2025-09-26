// src/components/Sidebar/RecentNews.jsx
import { ListGroup, Image } from "react-bootstrap";

export default function RecentNews() {
  const newsItems = [
    { id: 1, img: "/images/imgi_16_recent-1.jpg", title: "How to keep fear from your art business" },
    { id: 2, img: "/images/imgi_17_recent-2.jpg", title: "How to keep fear from your art business" },
    { id: 3, img: "/images/imgi_18_recent-3.jpg", title: "How to keep fear from your art business" },
  ];

  return (
    <div className="mb-4" style={{padding: '20px', paddingLeft:20}}>
      <h5 className="mb-3" style={{fontSize:24}}>Recent News</h5>
      <ListGroup variant="flush">
        {newsItems.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex align-items-center border-0 px-0">
            <Image src={item.img} roundedCircle width={100} height={100} alt={item.title}  />
            <div className="ms-3" style={{paddingTop:50}}>
              <small className="text-muted" style={{fontSize:16,}}>07 Mar 2022</small>
              <p className="mb-0" style={{fontSize:18}}>{item.title}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
