import Card from "react-bootstrap/Card";

function WeatherCard({ weather }) {
  return (
    <div className="bg-slate-100 w-96 rounded-lg flex justify-center">
      <Card style={{ width: "18rem" }}>
        <div className="mt-1">
          <iframe
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d510568.3664129106!2d${weather?.location.lon}!3d${weather?.location.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1663856067881!5m2!1ses-419!2sar`}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Card.Body className="text-center">
          <Card.Title className="font-bold text-lg">
            {weather?.location.name}
          </Card.Title>
          <Card.Text>
            <div>{weather?.location.region} </div>
            <div>{weather?.location.country}</div>
            <div>
              <div className="flex justify-center h-16">
                <img
                  src={`http:${weather?.current.condition.icon}`}
                  alt={weather?.current.condition.text}
                />
              </div>
              <div>{weather?.current.condition.text}</div>
              <div>{weather?.current.temp_c}°</div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WeatherCard;
