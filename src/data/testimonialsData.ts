/**
 * Testimonial Demonstration Data
 * Explicitly labeled as prototype demo placeholders per project requirements.
 */

export interface TestimonialItem {
  id: string;
  quote: string;
  clientType: string;
  serviceReceived: string;
  location: string;
  isDemo: boolean;
}

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "demo-1",
    quote: "Irina is an exceptional artist. My bridal makeup was completely flawless from our 10 AM first look until the party ended after midnight. It felt completely light on my skin yet photographed like a high-fashion editorial magazine.",
    clientType: "Bridal Client",
    serviceReceived: "Bridal Artistry & Preview",
    location: "Manhattan, New York",
    isDemo: true,
  },
  {
    id: "demo-2",
    quote: "Her attention to eye detail and skin tone matching is unmatched in NYC. I booked her for an annual charity gala and received endless compliments on the red carpet look. Professional, punctual, and remarkably calm.",
    clientType: "Gala Attendee",
    serviceReceived: "Red Carpet & Evening Glam",
    location: "Brooklyn, New York",
    isDemo: true,
  },
  {
    id: "demo-3",
    quote: "We hired Irina for a multi-look commercial editorial shoot. Her ability to pivot textures quickly between natural dewy and bold graphic drama under studio flashes saved us hours of post-retouching.",
    clientType: "Creative Director & Producer",
    serviceReceived: "Editorial & Photoshoot Makeup",
    location: "SoHo Studio, New York",
    isDemo: true,
  },
];
