// =================================================================================================
// PAGE CONFIGURATION OBJECT
// This file defines all the dynamic content for the case study page.
// The `renderer.js` file reads this object to build the HTML.
// To change text, images, or other content, edit the values in this file.
// =_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_=_
const config = {
  "globals": {
    "companyName": "iStreet Realty Group",
    "mainCTAButtonText": "Book A Discovery Call",
    "mainCTAButtonURL": "#contact",
    "primaryColor": "#e3c379",
    "accentColor": "#d9c6a2",
    "agents": [
      {
        "name": "Rick Roccasalva",
        "imageSrc": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/c68f7f74-a1cf-4af6-a787-cf6c973b557f/headshot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KZA6QD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICICucHk3XezjM4AfCprT39Honk1TRybICZon%2BAZ1dEOAiEAzXy18lbQ20GNjCSz3dNow6qMJlMfT9245e87iu0oF%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAzjzumPKC79%2BsJZFCrcA5bLcFXcxqarom1g3dd%2BG9sy%2B7wyp953bF1T1bnE0SP%2Bxax43DLgthixutJrm4FEdRiI6hrLg743gwTTov7paL09SncnwGMZiT33F1TGQE7qoqrDjyYfRK7XYrSstEZbpDWsUAYz9BcBptCA%2BpvMYtyiAip2QLD%2FnHXBb3J39jMxQN8%2BgEEerPHFwkf5rpZmKPtDKixFnCuDaPlV7Nvu2CrkjGnzlwtstf9Q5mDOA1f4OYAWTXYrE2QGbM%2BL4B6csjUTAiL58rLsGCT8PEyhJbraySdN0nXfbgiJcws%2B0l4bIpOc3KqoYuDqmv4%2FuVL75YiUatuzaswa0xrEaYjnqBmi0BkhgEhs%2BjvAR%2FCVnI6nObjEU2Wb4rUr469pE1GRY1wC7oLQU%2BrTnhe2kW5USbrtYS8i8tn4k4rQ8ohSmul2bjyptPRR4tODTjRO5SJMU5KYQ8HX1W4HerG%2B39DVkxUa7ArcxFVVKiJXSnbcS7y7oPKeKUVuidia6dhjTEzncwzJg70T2lwivFutmmqJeV%2BNHnWbeq%2BJqnr9YqPG6IC4fiJgc1aiH6GyASvHup6wGcTY2%2BYHH4%2BUhzJHLbyuvVL%2BEp70BRyatYUDprkdBmxQlv8ZHqcxRR0i3QnBMLuYscIGOqUBoiId26sXXHQP0FNyaIUF8o1FvfQzzIhuiIPrLeKE75k%2Bdosmcru52KCSKOBwMgAXmzPazCHql6kqEI65ZRLA0JiuCi9GPOiDVbOiiEVfx9XBYUP8L4XlYLj%2FAF9l14K0FH4HzeD9PEkPGJcGjg5LDnZnpP9F6HACvpH8O%2BsDdGm77nqVvg2vK4rrBgS7M0Ojw4avHFDpd%2FOflTo3g%2BLYbBZmJvVw&X-Amz-Signature=e3c2b0ee9cac560fc2a0b831e7726c5f43a64ac57c59f9e9074967532d517de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject",
        "contactDetails": [
          {
            "type": "email",
            "value": "rick@istreetrealty.ca"
          },
          {
            "type": "phone",
            "value": "416-410-2880"
          }
        ]
      }
    ]
  },
  "header": {
    "tag": "CASE STUDY",
    "title": "How We Helped an Investor Win Their Dream Rental Property Against 9 Other Offers While Building Generational Wealth",
    "subheadline": "Purchased in a <strong>High-Demand Area</strong> With Strong Terms—Now <a href=\"#\">Generating Top-Dollar Rent</a> in a Tight Market"
  },
  "mainBox": {
    "summary": {
      "title": "How We Helped an Investor Win Their Dream Rental Property Against 9 Other Offers While Building Generational Wealth",
      "heroImage": {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80"
      },
      "subTitle": "Summary",
      "paragraphs": [
        "Meet our client - a savvy investor with a vision for generational wealth but facing the brutal reality of today's competitive market. Like many investors, they were frustrated by endless bidding wars and properties that simply didn't make financial sense in this climate.",
        "Through professional service and market expertise, we delivered exceptional results for our client. <strong>WON AGAINST 9 COMPETING OFFERS</strong> in Woodbridge's most sought-after area Secured a turn-key 2-unit rental property that immediately cash-flows at top market rates <strong>LOCKED IN $261,000+ INSTANT EQUITY</strong> - purchased at $1,260,000 vs. comparable market values <strong>ACHIEVED THE IMPOSSIBLE:</strong> A profitable rental investment in today's challenging market Built the foundation for generational wealth that will benefit their children for decades"
      ]
    },
    "sidebar": {
      "title": "About {{companyName}}",
      "image": {
        "src": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/c68f7f74-a1cf-4af6-a787-cf6c973b557f/headshot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KZA6QD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICICucHk3XezjM4AfCprT39Honk1TRybICZon%2BAZ1dEOAiEAzXy18lbQ20GNjCSz3dNow6qMJlMfT9245e87iu0oF%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAzjzumPKC79%2BsJZFCrcA5bLcFXcxqarom1g3dd%2BG9sy%2B7wyp953bF1T1bnE0SP%2Bxax43DLgthixutJrm4FEdRiI6hrLg743gwTTov7paL09SncnwGMZiT33F1TGQE7qoqrDjyYfRK7XYrSstEZbpDWsUAYz9BcBptCA%2BpvMYtyiAip2QLD%2FnHXBb3J39jMxQN8%2BgEEerPHFwkf5rpZmKPtDKixFnCuDaPlV7Nvu2CrkjGnzlwtstf9Q5mDOA1f4OYAWTXYrE2QGbM%2BL4B6csjUTAiL58rLsGCT8PEyhJbraySdN0nXfbgiJcws%2B0l4bIpOc3KqoYuDqmv4%2FuVL75YiUatuzaswa0xrEaYjnqBmi0BkhgEhs%2BjvAR%2FCVnI6nObjEU2Wb4rUr469pE1GRY1wC7oLQU%2BrTnhe2kW5USbrtYS8i8tn4k4rQ8ohSmul2bjyptPRR4tODTjRO5SJMU5KYQ8HX1W4HerG%2B39DVkxUa7ArcxFVVKiJXSnbcS7y7oPKeKUVuidia6dhjTEzncwzJg70T2lwivFutmmqJeV%2BNHnWbeq%2BJqnr9YqPG6IC4fiJgc1aiH6GyASvHup6wGcTY2%2BYHH4%2BUhzJHLbyuvVL%2BEp70BRyatYUDprkdBmxQlv8ZHqcxRR0i3QnBMLuYscIGOqUBoiId26sXXHQP0FNyaIUF8o1FvfQzzIhuiIPrLeKE75k%2Bdosmcru52KCSKOBwMgAXmzPazCHql6kqEI65ZRLA0JiuCi9GPOiDVbOiiEVfx9XBYUP8L4XlYLj%2FAF9l14K0FH4HzeD9PEkPGJcGjg5LDnZnpP9F6HACvpH8O%2BsDdGm77nqVvg2vK4rrBgS7M0Ojw4avHFDpd%2FOflTo3g%2BLYbBZmJvVw&X-Amz-Signature=e3c2b0ee9cac560fc2a0b831e7726c5f43a64ac57c59f9e9074967532d517de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
      },
      "paragraphs": [
        "At iStreet Realty Group we are built on integrity, insight, and innovation. We combine decades of real estate expertise with cutting-edge technology to deliver unmatched support, transparency, and results for our clients. With over 40 years of hands-on real estate experience and extensive corporate backgrounds, our managing partners provide a balanced and strategic approach to Residential, Commercial, and Investment properties. We prioritize clear communication and use the latest market insights to guide every client toward success—whether buying, selling, or investing. At iStreet Realty Inc., we’re more than real estate experts—we’re your trusted partner in building your future."
      ]
    }
  },
  "sections": [
    {
      "type": "standard",
      "title": "The Challenge",
      "paragraphs": [
        "Finding a cash-flowing investment property in today's market seemed nearly impossible - most deals barely broke even",
        "Competing against 9+ other offers on every desirable property in Woodbridge's premium locations",
        "Uncertainty about rental potential - would the numbers actually work or just look good on paper?",
        "Time pressure mounting as quality investment opportunities disappeared within days of listing"
      ]
    },
    {
      "type": "standard",
      "title": "The Strategy",
      "paragraphs": [
        "Leveraged my deep investment property expertise to quickly identify true cash-flow potential others missed",
        "Crafted winning offers with strategic conditions - fewer restrictions, larger deposits, and accelerated closings",
        "Used professional communication and negotiation skills that impressed even competing agents",
        "Provided on-the-ground market intelligence to move fast when the right opportunity emerged",
        "Applied battle-tested tactics that win deals based on terms, not just price"
      ],
      "testimonial": {
        "quote": "\"\"Your expertise and integrity made this whole experience fantastic. You didn't just help us buy a property - you helped us build our family's financial future. We're already looking forward to doing this again soon because we know we have the right agent who actually understands investment real estate, not just sales.\"\"<br><span>— Satisfied Client</span>"
      }
    },
    {
      "type": "standard",
      "title": "The Solution",
      "paragraphs": [
        "After months of frustration, they decided to work with an agent who actually understood investment properties - not just residential sales. My hands-on experience with investment deals and proven negotiation track record made the difference they needed."
      ],
      "image": {
        "src": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?fit=crop&w=800&q=80"
      }
    },
    {
      "type": "standard",
      "title": "The Results",
      "paragraphs": [
        "<strong>WON AGAINST 9 COMPETING OFFERS</strong> in Woodbridge's most sought-after area",
        "Secured a turn-key 2-unit rental property that immediately cash-flows at top market rates",
        "<strong>LOCKED IN $261,000+ INSTANT EQUITY</strong> - purchased at $1,260,000 vs. comparable market values",
        "<strong>ACHIEVED THE IMPOSSIBLE:</strong> A profitable rental investment in today's challenging market",
        "Built the foundation for generational wealth that will benefit their children for decades"
      ]
    },
    {
      "type": "standard",
      "title": "Conclusion",
      "paragraphs": [
        "In multiple offer situations, winning terms often matter more than the highest price - strategic conditions can seal the deal",
        "Working with an agent who specializes in your specific buying goals (investment vs. personal residence) makes all the difference",
        "Even in today's tough market, profitable rental properties exist - but you need expertise to identify and secure them quickly"
      ]
    },
    {
      "type": "ctaBanner",
      "ctaBannerContent": {
        "subhead": "Trusted By Hundreds Of Home Buyers & Sellers",
        "headline": "Schedule Your Free Investment Property Strategy Session - Discover exactly how to identify and win profitable rental properties in today's competitive market, even when facing multiple offers.",
        "smallText": "Book A Discovery Call Now ➡️"
      }
    }
  ],
  "footer": {
    "logo": {
      "src": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/c68f7f74-a1cf-4af6-a787-cf6c973b557f/headshot.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KZA6QD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICICucHk3XezjM4AfCprT39Honk1TRybICZon%2BAZ1dEOAiEAzXy18lbQ20GNjCSz3dNow6qMJlMfT9245e87iu0oF%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAzjzumPKC79%2BsJZFCrcA5bLcFXcxqarom1g3dd%2BG9sy%2B7wyp953bF1T1bnE0SP%2Bxax43DLgthixutJrm4FEdRiI6hrLg743gwTTov7paL09SncnwGMZiT33F1TGQE7qoqrDjyYfRK7XYrSstEZbpDWsUAYz9BcBptCA%2BpvMYtyiAip2QLD%2FnHXBb3J39jMxQN8%2BgEEerPHFwkf5rpZmKPtDKixFnCuDaPlV7Nvu2CrkjGnzlwtstf9Q5mDOA1f4OYAWTXYrE2QGbM%2BL4B6csjUTAiL58rLsGCT8PEyhJbraySdN0nXfbgiJcws%2B0l4bIpOc3KqoYuDqmv4%2FuVL75YiUatuzaswa0xrEaYjnqBmi0BkhgEhs%2BjvAR%2FCVnI6nObjEU2Wb4rUr469pE1GRY1wC7oLQU%2BrTnhe2kW5USbrtYS8i8tn4k4rQ8ohSmul2bjyptPRR4tODTjRO5SJMU5KYQ8HX1W4HerG%2B39DVkxUa7ArcxFVVKiJXSnbcS7y7oPKeKUVuidia6dhjTEzncwzJg70T2lwivFutmmqJeV%2BNHnWbeq%2BJqnr9YqPG6IC4fiJgc1aiH6GyASvHup6wGcTY2%2BYHH4%2BUhzJHLbyuvVL%2BEp70BRyatYUDprkdBmxQlv8ZHqcxRR0i3QnBMLuYscIGOqUBoiId26sXXHQP0FNyaIUF8o1FvfQzzIhuiIPrLeKE75k%2Bdosmcru52KCSKOBwMgAXmzPazCHql6kqEI65ZRLA0JiuCi9GPOiDVbOiiEVfx9XBYUP8L4XlYLj%2FAF9l14K0FH4HzeD9PEkPGJcGjg5LDnZnpP9F6HACvpH8O%2BsDdGm77nqVvg2vK4rrBgS7M0Ojw4avHFDpd%2FOflTo3g%2BLYbBZmJvVw&X-Amz-Signature=e3c2b0ee9cac560fc2a0b831e7726c5f43a64ac57c59f9e9074967532d517de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
    },
    "brokerageLabel": "Brokerage:",
    "brokerageName": "HomeLife Partners",
    "brokerageAddress": "3850 Steeles Avenue W. Unit 6, Woodbridge, Ontario",
    "secondaryLogo": {
      "src": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/2ad1f3a4-7cea-45f4-bef2-b56767bf550e/brokeragelogo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5KZA6QD%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCICICucHk3XezjM4AfCprT39Honk1TRybICZon%2BAZ1dEOAiEAzXy18lbQ20GNjCSz3dNow6qMJlMfT9245e87iu0oF%2BEq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDAzjzumPKC79%2BsJZFCrcA5bLcFXcxqarom1g3dd%2BG9sy%2B7wyp953bF1T1bnE0SP%2Bxax43DLgthixutJrm4FEdRiI6hrLg743gwTTov7paL09SncnwGMZiT33F1TGQE7qoqrDjyYfRK7XYrSstEZbpDWsUAYz9BcBptCA%2BpvMYtyiAip2QLD%2FnHXBb3J39jMxQN8%2BgEEerPHFwkf5rpZmKPtDKixFnCuDaPlV7Nvu2CrkjGnzlwtstf9Q5mDOA1f4OYAWTXYrE2QGbM%2BL4B6csjUTAiL58rLsGCT8PEyhJbraySdN0nXfbgiJcws%2B0l4bIpOc3KqoYuDqmv4%2FuVL75YiUatuzaswa0xrEaYjnqBmi0BkhgEhs%2BjvAR%2FCVnI6nObjEU2Wb4rUr469pE1GRY1wC7oLQU%2BrTnhe2kW5USbrtYS8i8tn4k4rQ8ohSmul2bjyptPRR4tODTjRO5SJMU5KYQ8HX1W4HerG%2B39DVkxUa7ArcxFVVKiJXSnbcS7y7oPKeKUVuidia6dhjTEzncwzJg70T2lwivFutmmqJeV%2BNHnWbeq%2BJqnr9YqPG6IC4fiJgc1aiH6GyASvHup6wGcTY2%2BYHH4%2BUhzJHLbyuvVL%2BEp70BRyatYUDprkdBmxQlv8ZHqcxRR0i3QnBMLuYscIGOqUBoiId26sXXHQP0FNyaIUF8o1FvfQzzIhuiIPrLeKE75k%2Bdosmcru52KCSKOBwMgAXmzPazCHql6kqEI65ZRLA0JiuCi9GPOiDVbOiiEVfx9XBYUP8L4XlYLj%2FAF9l14K0FH4HzeD9PEkPGJcGjg5LDnZnpP9F6HACvpH8O%2BsDdGm77nqVvg2vK4rrBgS7M0Ojw4avHFDpd%2FOflTo3g%2BLYbBZmJvVw&X-Amz-Signature=105e34ae814a67563ccef6a5bdb6c34ee7203d06083f55715f551c1154ab6df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject"
    },
    "disclaimerText": "All testimonials on this page are from real clients. Their experiences do not guarantee similar results.<br>Individual results may vary based on location, market conditions, motivation, as well as other unforeseen factors. Your results may vary.",
    "privacyPolicy": {
      "text": "Privacy Policy",
      "href": "https://istreetrealty.ca/privacy-policy/"
    }
  }
};

// Export for Node.js environment (if applicable) or set for browser
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else if (typeof window !== 'undefined') {
  window.config = config;
}