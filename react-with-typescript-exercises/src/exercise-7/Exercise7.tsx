
// 1 Welcome Component (using interface)
interface WelcomeProps {
  username: string;
  isPremium: boolean;
}

export function Welcome({ username, isPremium }: WelcomeProps) {
  return (
    <div>
      <p>{isPremium ? "Welcome back, premium user!" : "Welcome, guest"}</p>
      <p>Username: {username}</p>
    </div>
  );
}


// 2 ProductCard Component using interface

interface ProductCardProps {
  name: string;
  price: number;
  description?: string;
}

export function ProductCard({ name, price, description }: ProductCardProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      {description && <p>{description}</p>}
    </div>
  );
}


// 3 Use 'type' instead of 'interface'

type ProductCardTypeProps = {
  name: string;
  price: number;
  description?: string;
};

export function ProductCardWithType({
  name,
  price,
  description,
}: ProductCardTypeProps) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      {description && <p>{description}</p>}
    </div>
  );
}


// 4 Break it on Purpose


export function BreakItOnPurpose() {
  return (
    <div>
      

      {/* @ts-expect-error Type 'string' is not assignable to type 'number' if you remove this comment line */}


      <ProductCard name="T-Shirt" price="free" />
    </div>
  );
}

// Wrap all 4 questions in Exercise 7 Component

export function Exercise7() {
  return (
    <div>
      <h1>Exercise 7</h1>

      <section>
        <h2>Welcome Component</h2>
        <Welcome username="Hassan" isPremium={true} />
        <Welcome username="GuestUser" isPremium={false} />
      </section>

      <section>
        <h2>ProductCard Component</h2>
        <ProductCard name="Laptop" price={999} description="High performance laptop" />
        <ProductCard name="Mouse" price={25} />
      </section>

      <section>
        <h2>Rebuild with 'type' instead of 'interface'</h2>
        <ProductCardWithType name="Keyboard" price={75} description="Mechanical keyboard" />
      </section>

      <section>
        <h2>Break it on Purpose</h2>
        <BreakItOnPurpose />
      </section>
    </div>
  );
}

export default Exercise7;
