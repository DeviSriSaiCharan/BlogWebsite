import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";
  import CarouselCard from "./CarouselCard";
  import { useRef, useEffect, useState } from "react";
  
  export default function CarouselSection() {
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      // Check if device is mobile on mount and window resize
      const checkMobile = () => {
        setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      };
      
      checkMobile(); // Check on mount
      window.addEventListener('resize', checkMobile);
      
      return () => window.removeEventListener('resize', checkMobile);
    }, []);
  
    const plugin = useRef(
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      })
    );
  
    const srcs = [
      "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1543994253-f10b4f0c9495?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ];
  
    const carouselOptions = {
      dragFree: isMobile, // Enable drag on mobile
      draggable: isMobile, // Enable dragging on mobile
      watchDrag: isMobile, // Enable drag watching on mobile
      skipSnaps: false,
      inViewThreshold: 0,
      containScroll: "keepSnaps",
    };
  
    return (
      <Carousel
        plugins={[plugin.current]}
        className="h-full w-full rounded-lg overflow-hidden select-none"
        opts={carouselOptions}
      >
        <CarouselContent 
          className="h-full"
          style={{ 
            // Only disable pointer events on desktop
            pointerEvents: isMobile ? "auto" : "none"
          }}
        >
          {srcs.map((src, idx) => (
            <CarouselItem
              key={src}
              className={`h-96 w-full ${isMobile ? 'touch-pan-y' : ''}`}
            >
              <div style={{ pointerEvents: "auto" }}>
                <CarouselCard src={src} key={idx} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  }