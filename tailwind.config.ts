import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				tech: {
					primary: 'hsl(var(--tech-primary))',
					secondary: 'hsl(var(--tech-secondary))',
					accent: 'hsl(var(--tech-accent))'
				}
			},
			backgroundImage: {
				'tech-gradient': 'var(--tech-gradient)',
				'tech-gradient-light': 'var(--tech-gradient-light)',
				'hero-gradient': 'var(--hero-gradient)',
				'section-gradient': 'var(--section-gradient)'
			},
			boxShadow: {
				'tech': 'var(--shadow-tech)',
				'card-soft': 'var(--shadow-card)',
				'glow': 'var(--shadow-glow)'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'slide-in-right': 'slideInRight 0.6s ease-out',
				'slide-in-left': 'slideInLeft 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
				'bounce-gentle': 'bounceGentle 1s ease-out',
				'typewriter': 'typewriter 4s steps(40) infinite',
				'gradient-shift': 'gradientShift 8s ease-in-out infinite',
				'orbit': 'orbit 15s linear infinite',
				'scale-pulse': 'scalePulse 3s ease-in-out infinite',
				'morph': 'morph 6s ease-in-out infinite',
				'glow-pulse': 'glowPulse 2s ease-in-out infinite',
				'float-slow': 'float 6s ease-in-out infinite',
				'rotate-slow': 'rotate 20s linear infinite',
				'wiggle': 'wiggle 1s ease-in-out infinite'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				slideInRight: {
					'0%': { opacity: '0', transform: 'translateX(60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-60px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-15px)' }
				},
				pulseGlow: {
					'0%, 100%': { boxShadow: '0 0 20px hsl(250, 84%, 54%, 0.4)' },
					'50%': { boxShadow: '0 0 60px hsl(250, 84%, 54%, 0.8), 0 0 100px hsl(260, 100%, 65%, 0.6)' }
				},
				bounceGentle: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				typewriter: {
					'0%, 50%': { width: '0%' },
					'50%, 100%': { width: '100%' }
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				orbit: {
					'0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
					'100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
				},
				scalePulse: {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.05)' }
				},
				morph: {
					'0%, 100%': { borderRadius: '50%' },
					'33%': { borderRadius: '30% 70% 70% 30%' },
					'66%': { borderRadius: '70% 30% 30% 70%' }
				},
				glowPulse: {
					'0%, 100%': { boxShadow: '0 0 20px hsl(250, 84%, 54%, 0.5)' },
					'50%': { boxShadow: '0 0 40px hsl(250, 84%, 54%, 0.8), 0 0 80px hsl(260, 100%, 65%, 0.6)' }
				},
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
