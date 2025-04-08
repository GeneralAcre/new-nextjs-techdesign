export default function RandomJoke({ joke }) {
    if (!joke) {
      return <div>Loading joke...</div>; // Show loading if joke is not yet available
    }
  
    return (
      <div className="RandomJoke">
        <h3 className="font-bold">{joke.setup}</h3>
        <p>{joke.punchline}</p>
      </div>
    );
  }
  