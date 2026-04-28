import ContactForm from "./components/ContactForm";
import FooterLegalLinks from "./components/FooterLegalLinks";
import Navigation from "./components/Navigation";
import SmoothScrollLink from "./components/SmoothScrollLink";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			{/* Header */}
			<header className="relative sticky top-0 z-50 bg-[#1a1a1a] text-white px-6 md:px-12 py-6 flex items-center justify-between shadow-lg">
				<div className="text-2xl md:text-3xl font-semibold">
					Robinson&apos;s Redesigns
				</div>
				<Navigation />
			</header>

			{/* Hero Section */}
			<section
				id="home"
				className="relative min-h-[calc(100vh-64px)] bg-gradient-to-r from-[#ff6b35] to-[#ff006e] flex flex-col md:flex-row items-center justify-center"
			>
				{/* Left Side - Text Content */}
				<div className="flex-1 px-6 md:px-12 py-16 md:py-24 text-white z-10 text-center">
					<h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
						Lawns You
						<br />
						Love. Yards
						<br />
						That Elevate
						<br />
						Your Home.
					</h1>
					<p className="text-lg md:text-xl mb-8 text-white/90">
						Professional landscaping and lawn care for residential and
						commercial properties—boosting curb appeal and outdoor living across
						the DMV.
					</p>
					<SmoothScrollLink
						href="#contact"
						targetId="contact"
						className="inline-block bg-[#1a1a1a] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#2d2d2d] transition-colors cursor-pointer"
					>
						Get a Quote
					</SmoothScrollLink>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-20 px-6 md:px-12 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 text-center">
						Landscaping &amp; Lawn Services
					</h2>
					<p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
						Thoughtful landscape design, seasonal upkeep, and dependable turf
						care for homes and businesses throughout the DMV.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
								Lawn Maintenance
							</h3>
							<p className="text-gray-600">
								Routine mowing, edging, and cleanup so turf stays thick, edges
								stay crisp, and your yard looks HOA-ready all season.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
								Seasonal Cleanups
							</h3>
							<p className="text-gray-600">
								Leaf removal, debris clearing, and full yard resets so beds and
								turf stay ready for spring growth or winter rest.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
								Landscape Design
							</h3>
							<p className="text-gray-600">
								Plant placement, bed shaping, and planting plans that match your
								home&apos;s style—layered color, texture, and structure
								outdoors.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
								Custom Yard Solutions
							</h3>
							<p className="text-gray-600">
								Flexible lawn and landscape packages sized to your lot, goals,
								and budget—from refreshes to ongoing upkeep.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
								Property Care Plans
							</h3>
							<p className="text-gray-600">
								Scheduled visits so turf, beds, and edges stay on track—less
								weekend yard work, more time enjoying your outdoor space.
							</p>
						</div>
						<div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mb-6">
								<svg
									className="w-8 h-8 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-semibold text-[#1a1a1a] mb-4">
								Done-Right Outdoor Work
							</h3>
							<p className="text-gray-600">
								Consistent, on-time crews who treat your property with
								respect—clean lines, thorough passes, and results you notice
								from the curb.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section
				id="about"
				className="py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100"
			>
				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6">
								About Robinson&apos;s Redesigns
							</h2>
							<p className="text-lg text-gray-700 mb-4">
								With over 15 years serving lawns and landscapes across the DMV,
								Robinson&apos;s Redesigns is known for dependable outdoor work:
								crisp edges, healthy turf, and planting beds that suit each
								property—not generic templates.
							</p>
							<p className="text-lg text-gray-700 mb-4">
								Our crews partner with homeowners and commercial clients who
								want their grounds to make a strong first impression. From
								weekly mowing to mulch refreshes and seasonal cleanups, we focus
								on durable materials, tidy finishes, and communication you can
								trust.
							</p>
							<p className="text-lg text-gray-700 mb-6">
								Thoughtful landscaping is exterior home improvement: it lifts
								curb appeal, frames your entryway, and turns yards into usable
								outdoor space. Every visit is handled with care—so your vision
								for the outside of your property becomes reality at a pace that
								fits your goals.
							</p>
							<div className="grid grid-cols-3 gap-6">
								<div>
									<div className="text-3xl font-bold text-[#ff6b35] mb-2">
										500+
									</div>
									<div className="text-gray-600">Projects Completed</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-[#ff6b35] mb-2">
										15+
									</div>
									<div className="text-gray-600">Years Experience</div>
								</div>
								<div>
									<div className="text-3xl font-bold text-[#ff6b35] mb-2">
										98%
									</div>
									<div className="text-gray-600">Client Satisfaction</div>
								</div>
							</div>
						</div>
						<div className="bg-gradient-to-br from-[#ff6b35] to-[#ff006e] p-12 rounded-lg text-white">
							<h3 className="text-3xl font-bold mb-6">Our Mission</h3>
							<p className="text-lg mb-6">
								To transform outdoor spaces through trusted lawn and landscape
								care—pairing smart design with consistent workmanship so
								residential and commercial properties look their best through
								every season.
							</p>
							<h3 className="text-3xl font-bold mb-6">Our Values</h3>
							<ul className="space-y-3 text-lg">
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Integrity on every property</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Quality workmanship outdoors</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Customer-first communication</span>
								</li>
								<li className="flex items-start">
									<span className="mr-3">✓</span>
									<span>Respect for your home and landscape</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="py-20 px-6 md:px-12 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 text-center">
						Pricing & Packages
					</h2>
					<p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
						Transparent lawn and landscape packages—from routine turf care to
						bigger yard upgrades. Custom quotes for every property.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
							<h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
								Basic Care
							</h3>
							<div className="mb-6">
								<span className="text-4xl font-bold text-[#ff6b35]">$60</span>
								<span className="text-gray-600">
									{" "}
									- $120 &middot; per visit
								</span>
							</div>
							<ul className="space-y-3 mb-8 text-gray-700">
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Lawn mowing & edging</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Sidewalk & driveway blow-off</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Weed removal (beds & cracks)</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Ideal bi-weekly maintenance</span>
								</li>
							</ul>
							<SmoothScrollLink
								href="#contact"
								targetId="contact"
								className="block w-full bg-[#1a1a1a] text-white py-3 rounded-lg font-medium hover:bg-[#2d2d2d] transition-colors cursor-pointer text-center"
							>
								Get Quote
							</SmoothScrollLink>
						</div>
						<div className="border-2 border-[#ff6b35] rounded-lg p-8 hover:shadow-lg transition-shadow relative">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#ff6b35] to-[#ff006e] text-white px-4 py-1 rounded-full text-sm font-semibold">
								Most Popular
							</div>
							<h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
								Property Care Plan
							</h3>
							<div className="mb-6">
								<span className="text-4xl font-bold text-[#ff6b35]">$140</span>
								<span className="text-gray-600">
									{" "}
									- $280 &middot; per visit
								</span>
							</div>
							<ul className="space-y-3 mb-8 text-gray-700">
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Everything in Basic</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Hedge & bush trimming</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Mulch bed refresh (light maintenance)</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Leaf removal / seasonal cleanup</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Small plant replacements</span>
								</li>
							</ul>
							<SmoothScrollLink
								href="#contact"
								targetId="contact"
								className="block w-full bg-gradient-to-r from-[#ff6b35] to-[#ff006e] text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer text-center"
							>
								Get Quote
							</SmoothScrollLink>
						</div>
						<div className="border-2 border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
							<h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
								Full Yard Transformation
							</h3>
							<div className="mb-6">
								<span className="text-4xl font-bold text-[#ff6b35]">$450</span>
								<span className="text-gray-600">
									{" "}
									- $2500+ &middot; per visit
								</span>
							</div>
							<ul className="space-y-3 mb-8 text-gray-700">
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Large cleanups & overgrown yards</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Mulch installation</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Decorative rock install</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Flower bed design & planting</span>
								</li>
								<li className="flex items-start">
									<span className="mr-2 text-[#ff6b35]">•</span>
									<span>Sod patch repair</span>
								</li>
							</ul>
							<SmoothScrollLink
								href="#contact"
								targetId="contact"
								className="block w-full bg-[#1a1a1a] text-white py-3 rounded-lg font-medium hover:bg-[#2d2d2d] transition-colors cursor-pointer text-center"
							>
								Get Quote
							</SmoothScrollLink>
						</div>
					</div>
					<p className="text-center text-gray-600 mt-8">
						All prices are estimates. Contact us for a detailed quote tailored
						to your yard or landscape project.
					</p>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#1a1a1a] to-[#2d2d2d] text-white"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
						Get In Touch
					</h2>
					<p className="text-xl text-gray-300 mb-12 text-center max-w-2xl mx-auto">
						Ready to lift curb appeal or tackle an outdoor project? Contact us
						for a free estimate—lawns, beds, and exterior upgrades that fit your
						home.
					</p>
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h3 className="text-2xl font-semibold mb-6">
								Contact Information
							</h3>
							<div className="space-y-6">
								<div className="flex items-start">
									<div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
											/>
										</svg>
									</div>
									<div>
										<div className="font-semibold mb-1">Phone</div>
										<div className="text-gray-300">+1 (301) 710-3578</div>
									</div>
								</div>
								<div className="flex items-start">
									<div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</div>
									<div>
										<div className="font-semibold mb-1">Email</div>
										<div className="text-gray-300">
											robinsonsredesignscorp@gmail.com
										</div>
									</div>
								</div>
								<div className="flex items-start">
									<div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											/>
										</svg>
									</div>
									<div>
										<div className="font-semibold mb-1">Business Hours</div>
										<div className="text-gray-300">
											Mon-Fri: 8:00 AM - 6:00 PM
											<br />
											Sat: 9:00 AM - 4:00 PM
										</div>
									</div>
								</div>
								<div className="flex items-start">
									<div className="w-12 h-12 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
										<svg
											className="w-6 h-6 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
											/>
										</svg>
									</div>
									<div>
										<div className="font-semibold mb-3">Follow Us</div>
										<div className="flex gap-4">
											<a
												href="https://www.instagram.com/robinsonsredesignllc/"
												target="_blank"
												className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
												aria-label="Instagram"
												rel="noopener"
											>
												<svg
													className="w-5 h-5 text-white"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
												</svg>
											</a>
											<a
												href="#twitter"
												className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
												aria-label="Twitter"
											>
												<svg
													className="w-5 h-5 text-white"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
												</svg>
											</a>
											<a
												href="#facebook"
												className="w-10 h-10 bg-gradient-to-br from-[#ff6b35] to-[#ff006e] rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity"
												aria-label="Facebook"
											>
												<svg
													className="w-5 h-5 text-white"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
							<ContactForm />
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#1a1a1a] text-white py-8 px-6 md:px-12">
				<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<div className="text-xl font-semibold mb-2">
							Robinson&apos;s Redesigns
						</div>
						<div className="text-gray-400 text-sm">
							© 2024 All rights reserved.
						</div>
					</div>
					<FooterLegalLinks />
				</div>
			</footer>
		</div>
	);
}
