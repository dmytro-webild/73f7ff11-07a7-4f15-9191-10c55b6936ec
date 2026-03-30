"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { Award, Phone, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Popular Dishes",
          id: "features",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Indian Hut"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "sparkles-gradient",
      }}
      title="Experience Royal Dining at Affordable Prices"
      description="Delicious North Indian food in Yamuna Vihar. Serving fresh, authentic, and high-quality meals for your family."
      leftCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/professional-high-quality-close-up-of-bu-1774865628702-703c105d.png?_wi=1",
          imageAlt: "Butter Chicken",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/fragrant-saffron-infused-biryani-rice-wi-1774865627806-6556d2a5.png?_wi=1",
          imageAlt: "Vegetable Biryani",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/assorted-tandoori-platter-with-charcoal--1774865629296-414cb0a7.png?_wi=1",
          imageAlt: "Tandoori Platter",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/creamy-rich-butter-chicken-in-a-bowl-ele-1774865628399-6fb78beb.png?_wi=1",
          imageAlt: "Creamy Butter Chicken",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/steaming-vegetable-biryani-in-a-traditio-1774865628198-a39308f8.png?_wi=1",
          imageAlt: "Aromatic Rice",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/assorted-tandoori-platter-with-charcoal--1774865629296-414cb0a7.png?_wi=2",
          imageAlt: "Assorted Tandoori",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/steaming-vegetable-biryani-in-a-traditio-1774865628198-a39308f8.png?_wi=2",
          imageAlt: "Steaming Biryani",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/professional-high-quality-close-up-of-bu-1774865628702-703c105d.png?_wi=2",
          imageAlt: "Classic Indian Dish",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/fragrant-saffron-infused-biryani-rice-wi-1774865627806-6556d2a5.png?_wi=2",
          imageAlt: "Spicy Biryani",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/creamy-rich-butter-chicken-in-a-bowl-ele-1774865628399-6fb78beb.png?_wi=2",
          imageAlt: "Rich Butter Chicken",
        },
      ]}
      buttons={[
        {
          text: "Call Now",
          href: "tel:+919876543210",
        },
        {
          text: "Book a Table",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-noodles_23-2149005440.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/girl-is-sitting-table-restaurant-drink-wine-enjoy-scent-roses-flower-waiting-date_496169-221.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/positive-young-friends-having-wine-dinner_23-2148454085.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148006611.jpg",
          alt: "Customer 4",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/professional-high-quality-close-up-of-bu-1774865628702-703c105d.png",
          alt: "Customer 5",
        },
      ]}
      avatarText="Loved by 500+ local families"
      marqueeItems={[
        {
          type: "text",
          text: "Authentic Spices",
        },
        {
          type: "text",
          text: "Family Friendly",
        },
        {
          type: "text",
          text: "Royal Ambience",
        },
        {
          type: "text",
          text: "Fresh Ingredients",
        },
        {
          type: "text",
          text: "Top Rated",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Royal Ambience",
          tags: [
            "Decor",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/creamy-rich-butter-chicken-in-a-bowl-ele-1774865628399-6fb78beb.png?_wi=3",
        },
        {
          id: "2",
          title: "Affordable Pricing",
          tags: [
            "Budget",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/fragrant-saffron-infused-biryani-rice-wi-1774865627806-6556d2a5.png?_wi=3",
        },
        {
          id: "3",
          title: "Friendly Service",
          tags: [
            "Hospitality",
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3Bf21Tt3wi4S5aiN2hhwyb4nkl1/assorted-tandoori-platter-with-charcoal--1774865629296-414cb0a7.png?_wi=3",
        },
      ]}
      title="Why Choose Indian Hut?"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Food Blogger",
          company: "Local Foodie",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-noodles_23-2149005440.jpg?_wi=1",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Regular",
          company: "Neighbor",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-is-sitting-table-restaurant-drink-wine-enjoy-scent-roses-flower-waiting-date_496169-221.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Local Resident",
          company: "Yamuna Vihar",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/positive-young-friends-having-wine-dinner_23-2148454085.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Diner",
          company: "Frequent Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/group-friends-eating-restaurant_23-2148006611.jpg",
        },
        {
          id: "5",
          name: "Priya Sharma",
          role: "Local",
          company: "Delhi Citizen",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-smiley-woman-with-noodles_23-2149005440.jpg?_wi=2",
        },
      ]}
      kpiItems={[
        {
          value: "4.8",
          label: "Google Rating",
        },
        {
          value: "149+",
          label: "Reviews",
        },
        {
          value: "100%",
          label: "Satisfaction",
        },
      ]}
      title="Rated 4.8 by 149+ customers"
      description="See why locals love our royal family dining experience."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactFaq
      animationType="slide-up"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What are your opening hours?",
          content: "We are open daily from 11:00 AM to 11:00 PM.",
        },
        {
          id: "2",
          title: "Do you offer delivery?",
          content: "Yes, we offer no-contact delivery and takeout options.",
        },
        {
          id: "3",
          title: "Do you accept reservations?",
          content: "Yes, please call us to book your table in advance.",
        },
      ]}
      ctaTitle="Craving Delicious Food?"
      ctaDescription="Get in touch for table reservations or catering inquiries."
      ctaButton={{
        text: "Call Now",
        href: "tel:+919876543210",
      }}
      ctaIcon={Phone}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      title="Our Achievements"
      description="Milestones that define our commitment to quality."
      metrics={[
        {
          id: "1",
          value: "10K+",
          title: "Happy Customers",
          description: "Families served",
          icon: Users,
        },
        {
          id: "2",
          value: "50+",
          title: "Unique Dishes",
          description: "Authentic recipes",
          icon: Utensils,
        },
        {
          id: "3",
          value: "5",
          title: "Years Experience",
          description: "Serving North Delhi",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "B, 4/121, Yamuna Vihar Rd, Delhi",
              href: "#",
            },
          ],
        },
        {
          title: "Quick Links",
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Call Us",
              href: "tel:+919876543210",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Indian Hut. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
