import SexualHealth from '@/app/sexual-health/page';
import { cardVariantsRight, cardVariantsLeft, cardVariantsSmall} from'@/utility/animationSyles'


export const productCategories = {
    'weight-loss': {
        pills: [
            {
                referenceHandle: "semaglutide-pills",
                token: "semaglutide",
                itemName: "Semaglutide Pills",
                variationName: "",
                SKU: "JM-SMG-P-003",
                description: "Semaglutide pills for weight loss.",
                category: "Weight Loss",
                ingredient: 'A glucagon-like peptide-1 (GLP-1) receptor agonist that helps regulate blood sugar levels and supports weight loss by reducing appetite and food intake when taken orally.',
                additionalCategories: "",
                SEOTitle: "Semaglutide Pills for Weight Loss",
                SEODescription: "Convenient and effective Semaglutide pills for weight management.",
                price: `$249 (first month at $149)`,
                ProductDescription:"Oral Semaglutide prescribed online for weight loss, regulating appetite and blood sugar levels.",
                Benefits: [
                  {
                    'Convenient Oral Administration': 'Semaglutide Pills offer the convenience of oral administration, eliminating the need for injections while providing similar weight loss and blood sugar control benefits.'
                  },
                  {
                    'Appetite Suppression': 'Semaglutide reduces hunger and food cravings, making it easier to follow a lower-calorie diet and support long-term weight management.'
                  },
                  {
                    'Effective for Weight Loss': 'It has been shown to promote significant weight loss by regulating appetite and food intake.'
                  },
                  {
                    'Improves Blood Sugar Control': 'Semaglutide helps lower blood sugar levels in people with type 2 diabetes, improving overall glycemic control.'
                  },
                  {
                    'Once-Daily Dosing': 'The pills are taken once a day, making it easier to incorporate into daily routines.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                    // "/images/homePage/women.png",
                  ],
                  questions : [
                    {
                      question: 'How are Semaglutide Pills taken?',
                      answer: 'One pill is taken daily with water.'
                    },
                    {
                      question: 'What are the side effects?',
                      answer: 'Side effects include nausea, vomiting, and dizziness.'
                    },
                    {
                      question: 'Can I eat normally while taking Semaglutide Pills?',
                      answer: 'A balanced, reduced-calorie diet is recommended.'
                    },
                    {
                      question: 'Will I regain weight after stopping the pills?',
                      answer: 'Some patients may regain weight without lifestyle changes.'
                    },
                    {
                      question: 'Can I use this pill with other weight loss medications?',
                      answer: 'Consult your doctor before combining it with other weight loss medications.'
                    }
                  ],
                href:'/weight-loss/semaglutide-pills',
                safety:'Use under medical supervision, especially if you have underlying health conditions.'
            },
            {
                referenceHandle: "tirzepatide-pills",
                token: "tirzepatide",
                itemName: "Tirzepatide Pills",
                variationName: "",
                SKU: "JM-TRZ-P-004",
                description: "Tirzepatide pills for weight loss.",
                category: "Weight Loss",
                ingredient: 'A glucagon-like peptide-1 (GLP-1) receptor agonist that helps regulate blood sugar levels and supports weight loss by reducing appetite and food intake when taken orally.',
                additionalCategories: "",
                SEOTitle: "Tirzepatide Pills for Weight Loss",
                SEODescription: "Convenient and highly effective Tirzepatide pills for managing weight.",
                price: '$349 (first month at $249)',
                ProductDescription:"Oral Tirzepatide prescribed for weight loss, supporting appetite control and blood sugar management.",
                Benefits: [
                  {
                    'Dual Hormone Action': 'Tirzepatide Pills target both GLP-1 and GIP receptors, enhancing their ability to regulate blood sugar and suppress appetite, leading to more effective weight loss.'
                  },
                  {
                    'Convenient Oral Administration': 'Unlike injectable forms, Tirzepatide Pills provide the convenience of oral dosing, making it easier to incorporate into daily routines.'
                  },
                  {
                    'Effective Weight Loss': 'Tirzepatide has been clinically proven to support significant weight loss by reducing hunger and calorie intake.'
                  },
                  {
                    'Improves Blood Sugar Control': 'Helps lower blood sugar levels in individuals with type 2 diabetes, promoting better overall glycemic control.'
                  },
                  {
                    'Reduces Cardiovascular Risk': 'Tirzepatide has been shown to improve cholesterol levels and reduce inflammation, contributing to better heart health.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                    // "/images/homePage/women.png",
                ],
                questions :[
                    {
                      question: 'How are Tirzepatide Pills taken?',
                      answer: 'One pill is taken daily with water.'
                    },
                    {
                      question: 'What are the side effects?',
                      answer: 'Common side effects include nausea, upset stomach, and dizziness.'
                    },
                    {
                      question: 'How soon can I expect weight loss results?',
                      answer: 'Many patients report weight loss within the first few weeks.'
                    },
                    {
                      question: 'Can I use this with other weight loss medications?',
                      answer: 'Consult your healthcare provider before combining treatments.'
                    },
                    {
                      question: 'Will I regain weight after stopping Tirzepatide?',
                      answer: 'Weight regain is possible without maintaining lifestyle changes like a healthy diet and exercise.'
                    }
                ],
                href:'/weight-loss/tirzepatide-pills',
                safety:' Always consult a healthcare provider before use, especially if you have a history of thyroid cancer or other medical conditions.'

            },
        ],
        injections: [
            {
                referenceHandle: "semaglutide-injection",
                token: "semaglutide",
                itemName: "Semaglutide Injection",
                variationName: "",
                SKU: "JM-SMG-I-001",
                description: "An injectable solution designed to promote weight loss by regulating appetite through Semaglutide.",
                category: "Weight Loss",
                additionalCategories: "",
                SEOTitle: "Semaglutide Injection for Weight Loss",
                SEODescription: ":An injectable solution designed to promote weight loss by regulating appetite through Semaglutide.",
                price: `Pricing by Dosage`,
                //  0.25mg - $199, 0.50mg - $199, 1.0mg - $225
                        // 12-week Kickstart Program - $539
                    
                ingredient:'Semaglutide: A glucagon-like peptide-1 (GLP-1) receptor agonist, which helps regulate blood sugar levels and supports weight loss by reducing appetite and food intake.',
                ProductDescription:"An injectable solution designed to promote weight loss by regulating appetite through Semaglutide.",
                Benefits:[
                  {
                    'Effective Weight Loss': 'Semaglutide injection helps promote significant weight loss by regulating appetite and reducing calorie intake.'
                  },
                  {
                    'Appetite Suppression': 'It reduces hunger and food cravings, making it easier for users to follow a lower-calorie diet.'
                  },
                  {
                    'Long-Acting Formula': 'A once-weekly injection ensures steady and consistent results without the need for daily medication.'
                  },
                  {
                    'Clinically Proven': 'Semaglutide has been clinically proven to aid in weight management and reduce the risk of obesity-related health conditions.'
                  },
                  {
                    'Improved Blood Sugar Control': 'In addition to weight loss, Semaglutide also helps improve glycemic control in people with type 2 diabetes.'
                  }
                ],
                questions : [
                  {
                    question: 'How is Semaglutide administered?',
                    answer: 'It is injected subcutaneously once a week.'
                  },
                  {
                    question: 'What are the common side effects?',
                    answer: 'Side effects include nausea, vomiting, and dizziness.'
                  },
                  {
                    question: 'How long will it take to see weight loss results?',
                    answer: 'Weight loss typically begins after 2-3 weeks of consistent use.'
                  },
                  {
                    question: 'Can I eat normally while using Semaglutide?',
                    answer: 'A reduced-calorie diet is recommended alongside the injections.'
                  },
                  {
                    question: 'Will I gain weight back after stopping Semaglutide?',
                    answer: 'Some users may regain weight if dietary changes are not maintained.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                  ],
                href:'/weight-loss/semaglutide-injection',
                safety:'Consult a healthcare provider before using Semaglutide. Common side effects include nausea, vomiting, and dizziness.'

            },
            {
                referenceHandle: "tirzepatide-injection",
                token: "tirzepatide",
                itemName: "Tirzepatide Injection",
                variationName: "",
                SKU: "JM-TRZ-I-002",
                description: "A weight loss injection that regulates blood sugar and appetite using Tirzepatide.",
                category: "Weight Loss",
                additionalCategories: "",
                SEOTitle: "Tirzepatide Injection for Weight Loss",
                SEODescription: "Highly effective Tirzepatide injection for managing weight.",
                ingredient:'tirzepatide: A glucagon-like peptide-1 (GLP-1) receptor agonist, which helps regulate blood sugar levels and supports weight loss by reducing appetite and food intake.',
                
                price: `Pricing by Dosage`,
                // price: `Pricing by Dosage:
                //         2.5mg - $299, 5.0mg - $299, 7.5mg - $299
                //         12-week Kickstart Program - $809`,
                ProductDescription:"A weight loss injection that regulates blood sugar and appetite using Tirzepatide.",
                Benefits: [
                  {
                    'Dual Action for Weight Loss': 'Tirzepatide works by mimicking two key hormones, GLP-1 and GIP, which help regulate appetite and control blood sugar, leading to significant weight loss.'
                  },
                  {
                    'Improved Blood Sugar Control': 'It effectively lowers blood glucose levels, making it a powerful treatment for individuals with type 2 diabetes.'
                  },
                  {
                    'Once-Weekly Dosing': 'Tirzepatide is administered once a week, offering a convenient option for long-term use without the need for daily injections.'
                  },
                  {
                    'Cardiovascular Health Benefits': 'Tirzepatide has been shown to reduce the risk of cardiovascular complications by improving cholesterol levels and reducing inflammation.'
                  },
                  {
                    'Reduces Appetite': 'It helps reduce hunger, making it easier to follow a calorie-controlled diet and achieve long-term weight management.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                    // "/images/homePage/women.png",
                  ],
                  questions : [
                    {
                      question: 'How often should I take Tirzepatide?',
                      answer: 'Administer once weekly via injection.'
                    },
                    {
                      question: 'Are there side effects?',
                      answer: 'Common side effects include nausea, upset stomach, and diarrhea.'
                    },
                    {
                      question: 'How soon will I see weight loss results?',
                      answer: 'Results vary, but many patients report weight loss within the first few weeks.'
                    },
                    {
                      question: 'Can I continue to eat normally?',
                      answer: 'A reduced-calorie diet may improve the results of Tirzepatide.'
                    },
                    {
                      question: 'Will my weight loss be sustained after stopping the injection?',
                      answer: 'Lifestyle changes are important to maintain weight loss after stopping Tirzepatide.'
                    }
                  ],
                href:'/weight-loss/tirzepatide-injection',
                safety:"Tirzepatide may cause nausea and vomiting. Seek medical advice if side effects persist."
            },
        ],
    },
    'sexual-health': {
        pills:[
          {
            referenceHandle: "Sildenafil-Pill",
            token: "Sildenafil",
            itemName: "Sildenafil",
            variationName: "Pill",
            SKU: "JM-SLD-001",
            description: "A pill used to treat erectile dysfunction by increasing blood flow to the penis.",
            category: "Sexual Health",
            ingredient:'Sildenafil',
            additionalCategories: "",
            SEOTitle: "Sildenafil",
            SEODescription: "Sildenafil sexuall healthA pill used to treat erectile dysfunction by increasing blood flow to the penis.",
            price: '14.00$',
            ProductDescription:" pill used to treat erectile dysfunction by increasing blood flow to the penis.",
            Benefits:
            [
              {
              'Fast-Acting':'Sildenafil typically works within 30-60 minutes, making it a quick option for spontaneous sexual activity.'
              },
              {
              'Shorter Duration':'Its effects last around 4-6 hours, which is beneficial for those looking for a short-term solution to ED.'
              },
              {
              'Cost-Effective':'Sildenafil is often more affordable than other ED medications due to its wide availability and various generic options.'
              }
            ],
            images:[
                "/images/homePage/sexual.png",
                "/images/homePage/weight.png",
                "/images/homePage/man.png",
              ],
              questions : [{
                question:'How long before Sildenafil takes effect?',
                answer:'It typically works within 30-60 minutes.'
              },{
                question:'Can I take Sildenafil with other medications?',
                answer:'Consult a doctor before combining Sildenafil with other treatments.'
              },{
                question:' How long do the effects last?',
                answer:'Moderate alcohol consumption is generally safe, but consult your doctor.'
              },
              {
                question:'Can I take it daily? ',
                answer: 'Consult your healthcare provider about daily use.'
              },
            ],
            safety:'Not suitable for individuals with heart conditions or those taking nitrates',
            href:'/sexual-health/Sildenafil-Pill'
          },
          {
            referenceHandle: "Tadalafil-Pill",
            token: "Tadalafil",
            itemName: "Tadalafil",
            variationName: "Pill",
            SKU: "JM-TDL-002",
            description: "A medication used to treat erectile dysfunction, with longer-lasting effects compared to Sildenafil.",
            category: "Sexual Health",
            ingredient:'Tadalafil',
            additionalCategories: "",
            SEOTitle: "Tadalafil",
            SEODescription: "Tadalafil A medication used to treat erectile dysfunction, with longer-lasting effects compared to Sildenafil.",
            price: '14.00$',
            ProductDescription:"A medication used to treat erectile dysfunction, with longer-lasting effects compared to Sildenafil.",
            Benefits:[
              {
              'Longer Duration':'Tadalafil can last up to 36 hours, earning it the nickname "the weekend pill." This provides greater flexibility and spontaneity for sexual activity over an extended period.'
              },
              {
              'Lower Daily Dose Option':'Tadalafil can be taken in lower daily doses, allowing for more consistent and natural sexual activity without needing to plan ahead.'
              },
              {
              'Treatment of Other Conditions':'In addition to ED, Tadalafil is sometimes prescribed to treat benign prostatic hyperplasia (BPH) and pulmonary arterial hypertension, offering added benefits for men with these conditions.'
              }
            ],
            images:[
                "/images/homePage/sexual.png",
                "/images/homePage/weight.png",
                "/images/homePage/man.png",
              ],
              questions : [{
                question:'How long does Tadalafil last?',
                answer:'Its effects can last up to 36 hours.'
              },{
                question:'Can I take it with food?',
                answer:' Yes, Tadalafil can be taken with or without food.'
              },{
                question:'Can I drink alcohol while taking this?',
                answer:'Consult your doctor, as alcohol may increase the risk of side effects.'
              },
              {
                question:'Can I take it daily? ',
                answer: 'Consult your healthcare provider about daily use.'
              },
            ],
            safety:'Not suitable for individuals taking nitrates or with severe heart conditions.',
            href:'/sexual-health/Tadalafil-Pill'
          },
          {
            referenceHandle: "Vitality-Max",
            token: "Vitality Max",
            itemName: "VitalityMax",
            variationName: "Pill",
            SKU: "JM-SH-P-001 to JM-SH-P-004",
            description: "The VitalityMax line offers various strength solutions for erectile dysfunction, combining APO, Sildenafil, and Tadalafil.",
            category: "Sexual Health",
            ingredient:'APO, Sildenafil, Tadalafil',
            additionalCategories: "",
            SEOTitle: "Tadalafil",
            SEODescription: " vitallyMax The VitalityMax line offers various strength solutions for erectile dysfunction, combining APO, Sildenafil, and Tadalafil.",
            price: 'Varies by dosage',
            ProductDescription:" The VitalityMax line offers various strength solutions for erectile dysfunction, combining APO, Sildenafil, and Tadalafil",
            Benefits:[
              {
              'Longer Duration':'Tadalafil can last up to 36 hours, earning it the nickname "the weekend pill." This provides greater flexibility and spontaneity for sexual activity over an extended period.'
              },
              {
              'Lower Daily Dose Option':'Tadalafil can be taken in lower daily doses, allowing for more consistent and natural sexual activity without needing to plan ahead.'
              },
              {
              'Treatment of Other Conditions':'In addition to ED, Tadalafil is sometimes prescribed to treat benign prostatic hyperplasia (BPH) and pulmonary arterial hypertension, offering added benefits for men with these conditions.'
              }
            ],
            images:[
                "/images/homePage/sexual.png",
                "/images/homePage/weight.png",
                "/images/homePage/man.png",
              ],
              questions : [{
                question:'How long before it takes effect?',
                answer:'The pill usually takes effect within 30-60 minutes.'
              },{
                question:'Can I take it daily?',
                answer:'Consult your healthcare provider to determine the proper dosage for daily use.'
              },{
                question:' What are the side effects?',
                answer:'Common side effects include headaches, flushing, and dizziness.'
              },
              {
                question:'Can I take it with food? ',
                answer: 'Heavy meals may delay the effect'
              },
              {
                question:'Can I drink alcohol while taking VitalityMax?',
                answer: 'Moderate alcohol consumption is generally safe, but consult your doctor.'
              },
              {
                question:'How long do the effects last? ',
                answer: ' Effects can last up to 36 hours, depending on the dosage.'
              }],
            safety:'Avoid use with nitrates or heart condition treatments.',
            href:'/sexual-health/Vitality-Max'
          }],
          Capsules :
          [{
              referenceHandle: "FemLibido-Boost",
              token: "FemLibido Boost",
              itemName: "FemLibido Boost",
              variationName: "FemLibidoBoost",
              SKU: "JM-FS-C-001",
              description: " A capsule designed to enhance female libido and energy using a natural blend of Tribulus, Maca, and Ginseng.",
              category: "Sexual Health",
              ingredient:'Tribulus Terrestris, Maca Root, L-Arginine, Ginseng',
              additionalCategories: "",
              SEOTitle: "Sildenafil",
              SEODescription: " A capsule designed to enhance female libido and energy using a natural blend of Tribulus, Maca, and Ginseng.",
              price: '14.00$',
              ProductDescription:"A capsule designed to enhance female libido and energy using a natural blend of Tribulus, Maca, and Ginseng",
              Benefits:[
                {
                'Combination of Ingredients':'VitalityMax combines APO, Sildenafil, and Tadalafil, offering a powerful solution for erectile dysfunction by enhancing blood flow and maintaining longer-lasting effects.'
                },
                {
                'Customizable Strengths':'Available in various strengths (high, medium, and low), the VitalityMax line caters to different levels of erectile dysfunction, allowing users to choose the appropriate dosage for their needs.'
                },
                {
                'Quick and Long-Lasting:':'While Sildenafil provides fast action within 30-60 minutes, Tadalafil offers effects that can last up to 36 hours, making VitalityMax suitable for both short-term and long-term needs.'
                }
              ],
              images:[
                  "/images/homePage/sexual.png",
                  "/images/homePage/weight.png",
                  "/images/homePage/man.png",
                  // "/images/homePage/women.png",
                ],
                questions : [{
                  question:'How long before Sildenafil takes effect?',
                  answer:'It typically works within 30-60 minutes.'
                },{
                  question:'Can I take Sildenafil with other medications?',
                  answer:'Consult a doctor before combining Sildenafil with other treatments.'
                },{
                  question:' How long do the effects last?',
                  answer:'Moderate alcohol consumption is generally safe, but consult your doctor.'
                },
                {
                  question:'Can I take it daily? ',
                  answer: 'Consult your healthcare provider about daily use.'
                },
              ],
              Benefits:[{
                'Fast-Acting':'Sildenafil typically works within 30-60 minutes, making it a quick option for spontaneous sexual activity.'
                },
                {
                'Shorter Duration':'Its effects last around 4-6 hours, which is beneficial for those looking for a short-term solution to ED.'
                },
                {
                'Cost-Effective':'Sildenafil is often more affordable than other ED medications due to its wide availability and various generic options.'
                }
              ],
              safety:'Not suitable for individuals with heart conditions or those taking nitrates',
              href:'/sexual-health/Sildenafil-Pill'
          }],
          Creams :[{
              referenceHandle: "Estro-Balance",
              token: "EstroBalance",
              itemName: "EstroBalance",
              variationName: "",
              SKU: "JM-TDL-002",
              description: "A cream designed to balance female hormones using Estriol and Progesterone, applied topically.",
              category: "Sexual Health",
              additionalCategories: "",
              SEOTitle: " EstroBalance - ED Treatment - female ",
              SEODescription: "A cream designed to balance female hormones using Estriol and Progesterone, applied topically.",
              price: '35.00$ per tube',
              ProductDescription:"A cream designed to balance female hormones using Estriol and Progesterone, applied topically.",
              ingredient:'Estriol 0.5%, Progesterone 0.2%',
              Benefits: [
                {
                  'Hormonal Balance': 'EstroBalance helps balance female hormones by using Estriol and Progesterone, supporting overall hormonal health.'
                },
                {
                  'Topical Application': 'Applied directly to the skin, this cream allows for localized absorption without the need for oral medication.'
                },
                {
                  'Supports Menopausal Symptoms': 'EstroBalance may help alleviate symptoms related to menopause, such as hot flashes, mood swings, and night sweats.'
                },
                {
                  'Gentle on the Body': 'The formulation is designed to be gentle, reducing the risk of side effects compared to stronger hormone treatments.'
                }
              ],
              images:[
                  "/images/homePage/sexual.png",
                  "/images/homePage/weight.png",
                  "/images/homePage/man.png",
                  // "/images/homePage/women.png",
                ],
                questions : [{
                  question:'How often should I apply EstroBalance?',
                  answer:'Apply the cream once daily, as directed.'
                },{
                  question:'Can I use it with other hormone treatments?',
                  answer:' Consult your doctor before combining with other hormonal therapies.'
                },{
                  question:'Are there side effects?',
                  answer:'Side effects may include mild skin irritation or hormonal imbalances if overused.'
                }],
              href:'/sexual-health/Estro-Balance',
              safety:' Not suitable for individuals taking nitrates or with severe heart conditions.'
          }]
    },
    'hair-growth': {
        men: [
            {
                referenceHandle: "maxhair-men",
                token: "maxhair",
                itemName: "MaxHair (Pill)",//for Men 
                variationName: "",
                SKU: "JM-MAX-M-001",
                description: "Men's hair growth solution with Minoxidil 8% and Dutasteride 0.3%.",
                category: "Hair Growth",
                ingredient:'Dutasteride 0.5 mg',
                additionalCategories: "",
                SEOTitle: "MaxHair for Men - Hair Growth Solution",
                SEODescription: "A daily pill designed to reduce hair loss in men by inhibiting DHT production using Dutasteride",
                price: '20$',
                ProductDescription:"A daily pill designed to reduce hair loss in men by inhibiting DHT production using Dutasteride",
                Benefits: [
                  {
                    'Promotes Hair Growth': 'MaxHair for Men contains active ingredients that stimulate hair follicles and promote thicker, fuller hair.'
                  },
                  {
                    'Reduces Hair Loss': 'The formula helps slow down hair thinning and loss, supporting the maintenance of healthy hair.'
                  },
                  {
                    'Convenient Oral Administration': 'MaxHair for Men comes in pill form, making it easy to incorporate into daily routines without the need for topical treatments.'
                  },
                  {
                    'Supports Scalp Health': 'The pill contains ingredients that improve scalp circulation and nourishment, creating a healthy environment for hair growth.'
                  },
                  {
                    'Clinically Proven Ingredients': 'The active ingredients in MaxHair for Men are backed by clinical studies, showing effectiveness in reducing hair loss and promoting growth.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                ],
                questions : [
                    {
                      question: 'How long does it take to see results?',
                      answer: 'It may take 3-6 months of regular use to see noticeable results.'
                    },
                    {
                      question: 'What are the side effects?',
                      answer: 'Side effects include reduced libido and possible hormonal imbalances.'
                    },
                    {
                      question: 'Can I use this pill with topical hair treatments?',
                      answer: 'Consult your doctor before combining treatments.'
                    },
                    {
                      question: 'Can I take it if I’m planning to have children?',
                      answer: 'Dutasteride may affect fertility, so consult your doctor if you are planning to have children.'
                    },
                    {
                      question: 'Will hair loss return if I stop taking the pill?',
                      answer: 'Yes, hair loss may resume after stopping the medication.'
                    }
                ],
                href:'/hair-growth/maxhair-men',
                safety:' Avoid use if allergic to Dutasteride. Consult a healthcare provider before '
            },
            {
              referenceHandle: "maxhair-foam",
              token: "maxhairFoam",
              itemName: "MaxHair (Foam)",//for Men 
              variationName: "",
              SKU: "JM-MAX-M-001",
              description: "A foam designed to treat male pattern baldness and promote hair regrowth using a combination of Minoxidil and Dutasteride.",
              category: "Hair Growth",
              ingredient:'Minoxidil 8%, Dutasteride 0.3%, 50 ml',
              additionalCategories: "",
              SEOTitle: "MaxHair for Men - foam - Hair Growth Solution",
              SEODescription: "A foam designed to treat male pattern baldness and promote hair regrowth using a combination of Minoxidil and Dutasteride.",
              price: '75$',
              ProductDescription:"A foam designed to treat male pattern baldness and promote hair regrowth using a combination of Minoxidil and Dutasteride.",
              Benefits: [
                {
                  'Easy Topical Application': 'MaxHair Foam is applied directly to the scalp, allowing for targeted treatment of hair thinning and hair loss.'
                },
                {
                  'Promotes Hair Growth': 'Formulated to stimulate hair follicles, MaxHair Foam helps encourage new hair growth and reduce hair shedding.'
                },
                {
                  'Non-Greasy Formula': 'The lightweight foam absorbs quickly without leaving a greasy residue, making it convenient for daily use.'
                },
                {
                  'Supports Scalp Health': 'MaxHair Foam improves scalp health by enhancing blood circulation and providing nourishment to the hair follicles.'
                },
                {
                  'Clinically Proven Results': 'The active ingredients in MaxHair Foam are clinically proven to help reduce hair loss and promote thicker, fuller hair.'
                }
              ],
              images:[
                  "/images/homePage/sexual.png",
                  "/images/homePage/weight.png",
                  "/images/homePage/man.png",
              ],
              questions : [
                {
                  question: 'How often should I use MaxHair for Men (Foam)?',
                  answer: 'Apply twice daily to the scalp.'
                },
                {
                  question: 'When can I expect to see results?',
                  answer: 'Hair regrowth may begin after 3-4 months of consistent use.'
                },
                {
                  question: 'Can I use this product if I have a sensitive scalp?',
                  answer: 'Yes, but monitor for irritation and discontinue use if discomfort occurs.'
                },
                {
                  question: 'How long do I need to continue treatment?',
                  answer: 'To maintain results, continued use is recommended.'
                },
                {
                  question: 'Will hair regrow in bald areas?',
                  answer: 'It can promote regrowth in thinning areas, but it may not be as effective for completely bald spots.'
                },
                {
                  question: 'Can I combine this foam with other treatments?',
                  answer: 'Consult a healthcare provider before combining treatments.'
                }
              ],
              href:'/hair-growth/maxhair-foam',
              safety:'  Avoid use if allergic to Minoxidil or Dutasteride. Side effects may include scalp irritation.'
            },
            {
                referenceHandle: "scalpsoothe-package",
                token: "scalpsoothe",
                itemName: "ScalpSoothe Package",
                variationName: "",
                SKU: "JM-SSP-003",
                description: "Package for scalp inflammation and dandruff, containing Ketoconazole 2% and Hydrocortisone 1%.",
                category: "Hair Growth",
                ingredient:' Ketoconazole 2%, Hydrocortisone 1%',
                additionalCategories: "",
                SEOTitle: "ScalpSoothe - Package for Scalp Care",
                SEODescription: "A solution to relieve scalp inflammation and reduce dandruff using Ketoconazole and Hydrocortisone",
                price: '15$',
                ProductDescription:"A solution to relieve scalp inflammation and reduce dandruff using Ketoconazole and Hydrocortisone",
                Benefits: [
                  {
                    'Reduces Scalp Irritation': 'The ScalpSoothe Package is designed to alleviate itching, redness, and discomfort caused by scalp conditions like dandruff and psoriasis.'
                  },
                  {
                    'Promotes Healthy Scalp': 'By improving scalp health, the ScalpSoothe Package creates an optimal environment for hair growth and prevents further irritation.'
                  },
                  {
                    'Anti-Inflammatory Properties': 'Contains ingredients that help reduce inflammation and calm the scalp, reducing irritation and flaking.'
                  },
                  {
                    'Moisturizes and Hydrates': 'Provides deep hydration to the scalp, preventing dryness and flakiness that can lead to itching and discomfort.'
                  },
                  {
                    'Easy Topical Application': 'The products in the ScalpSoothe Package are easy to apply directly to the scalp for fast relief and long-lasting comfort.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                ],
                questions :[
                    {
                      question: 'How often should I use ScalpSoothe?',
                      answer: 'Use daily or as directed by a healthcare professional.'
                    },
                    {
                      question: 'What are the side effects?',
                      answer: 'Mild itching and redness may occur initially.'
                    },
                    {
                      question: 'How soon can I expect relief?',
                      answer: 'Relief from itching and dandruff may be seen within a few days of consistent use.'
                    },
                    {
                      question: 'Can I use this product if I have sensitive skin?',
                      answer: 'It is generally safe, but if irritation occurs, discontinue use.'
                    },
                    {
                      question: 'Will it help with hair growth?',
                      answer: 'No, it is designed to treat scalp conditions, not promote hair growth.'
                    }
                ],
                href:'/hair-growth/scalpsoothe-package',
                safety:' Avoid prolonged use. If symptoms persist, discontinue use and consult a doctor.'
            },
        ],
        women: [
            {
                referenceHandle: "YouthLocks-women",
                token: "YouthLocks",
                itemName: "YouthLocks 45 (Pill)",//for Women under 45
                variationName: "",
                SKU: "JM-HRV-W-002",
                description: "Women's Under 45 hair growth solution with Minoxidil 8% and Dutasteride 0.3%.",
                category: "Hair Growth",
                ingredient:'Minoxidil, Spironolactone',
                additionalCategories: "",
                SEOTitle: "HairRevive for Women - Hair Growth Solution",
                SEODescription: "Effective hair growth solution for women, containing Minoxidil and Dutasteride.",
                price: '20$',
                ProductDescription:"A hair growth pill formulated for women under 45 to promote thicker, youthful hair using Minoxidil and Spironolactone.",
                Benefits: [
                  {
                    'Supports Hair Growth': 'YouthLocks for Women helps stimulate hair follicles to encourage new hair growth and reduce hair thinning.'
                  },
                  {
                    'Improves Hair Thickness': 'Formulated to enhance hair density, making hair appear fuller and healthier.'
                  },
                  {
                    'Prevents Hair Breakage': 'The ingredients in YouthLocks help strengthen hair strands, reducing breakage and split ends.'
                  },
                  {
                    'Hormone Balance Support': 'Contains ingredients that help balance hormones, which can be a factor in hair thinning and loss in women.'
                  },
                  {
                    'Gentle Formula': 'Designed specifically for women, YouthLocks offers a gentle yet effective treatment for maintaining healthy hair.'
                  },
                  {
                    'Convenient Oral Solution': 'YouthLocks comes in a pill form, providing an easy-to-use solution for daily hair care without the need for topical applications.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                ],
                questions : [
                  {
                    question: 'How long before I see results?',
                    answer: 'Hair regrowth may take 3-6 months of consistent use.'
                  },
                  {
                    question: 'Are there any side effects?',
                    answer: 'Side effects include dizziness, dry skin, and irregular periods.'
                  },
                  {
                    question: 'Can I use it if I’m pregnant?',
                    answer: 'No, it’s not recommended for pregnant women.'
                  },
                  {
                    question: 'How long should I continue the treatment?',
                    answer: 'Long-term use is required to maintain hair growth.'
                  },
                  {
                    question: 'Will hair loss return if I stop the pills?',
                    answer: 'Yes, stopping the treatment may cause hair loss to resume.'
                  }
                ],
                href:'/hair-growth/YouthLocks-women',
                safety:'Consult your healthcare provider before use, especially if taking other medications.'

            },
            {
                referenceHandle: "HairRevive-women-foam",
                token: "hairrenew",
                itemName: "HairRevive (Foam)",// for Women 
                variationName: "",
                SKU: "JM-HRW-1-004",
                description: "Pill for women over 45 containing Minoxidil 1 mg and Dutasteride 0.4 mg.",
                category: "Hair Growth",
                ingredient:' Minoxidil 8%, Dutasteride 0.3%, 50 ml',
                additionalCategories: "",
                SEOTitle: "HairRenew - Pill for Women Over 45 (1 mg)",
                SEODescription: "Effective hair growth Foam for women over 45, containing Minoxidil and Dutasteride.",
                price: '20$',
                ProductDescription:" A foam formulated for women to reduce hair thinning and promote fuller hair using Minoxidil and Dutasteride.",
                Benefits: [
                  {
                    'Stimulates Hair Growth': 'HairRevive Foam is formulated to target hair follicles, promoting the growth of new, healthy hair.'
                  },
                  {
                    'Reduces Hair Thinning': 'The foam helps to reduce hair thinning and shedding, supporting thicker and fuller hair over time.'
                  },
                  {
                    'Easy to Apply': 'The lightweight foam is easy to apply directly to the scalp, providing targeted treatment without the mess of creams or oils.'
                  },
                  {
                    'Quick Absorption': 'HairRevive Foam absorbs quickly into the scalp, delivering active ingredients efficiently and without leaving a greasy residue.'
                  },
                  {
                    'Improves Scalp Health': 'Contains nourishing ingredients that improve scalp circulation and hydration, creating a healthy environment for hair growth.'
                  },
                  {
                    'Suitable for Daily Use': 'The gentle formula is suitable for daily use, making it convenient to incorporate into a regular hair care routine.'
                  }
                ],
                images:[
                    "/images/homePage/sexual.png",
                    "/images/homePage/weight.png",
                    "/images/homePage/man.png",
                ],
                questions : [{
                    question:'How do I apply HairRevive for Women?',
                    answer:'Apply directly to the affected scalp areas twice daily.'
                  },{
                    question:'Are there any side effects?',
                    answer:'Scalp irritation and dryness are common but usually mild.'
                  },{
                    question:'How long does it take to see results?',
                    answer:'You may begin to see results after 3-4 months.'
                  },
                  {
                    question:'Can I use this product if I am pregnant?',
                    answer:' No, it is not recommended for use during pregnancy.'
                  },{
                    question:' What should I do if I experience irritation?',
                    answer:' Stop using the product and consult your doctor.'
                  },
                  {
                    question:' Can I color my hair while using this product? ',
                    answer:'Yes, but wait at least 24 hours after applying the foam.'
                  },
                ],
                href:'/hair-growth/hairrenew-women-1mg',
                safety:'Avoid contact with eyes. Consult a healthcare professional if irritation persists.'
            },
           
        ],
    }
};

//main pages instruction product 
  export const cardData = {
    sexualHealth: [
      {
        title: 'Which Tadalafil right for you?',
        content: [
          'Tadalafil is a prescription medication used to treat erectile dysfunction (ED).',
          'It works by increasing blood flow to the penis during sexual stimulation, helping to achieve and maintain an erection.',
          'Tadalafil is known for its long duration of action, lasting up to 36 hours, which allows for greater spontaneity.',
          'It can be taken as needed or daily, depending on your doctor’s recommendation. The typical starting dose is 10 mg, taken at least 30 minutes before sexual activity.',
          'Avoid taking Tadalafil with excessive alcohol or grapefruit juice, as these can interfere with the effectiveness of the medication.',
        ],
      },
      {
        title: 'Instruction for Sildenafil',
        content: [
          'Sildenafil is another medication used to treat erectile dysfunction (ED).',
          'It works similarly to Tadalafil by increasing blood flow to the penis during sexual stimulation.',
          'Sildenafil has a shorter duration of action, typically lasting 4 to 6 hours, and is usually taken about 30 minutes to 1 hour before sexual activity.',
          'The standard starting dose is 50 mg, but your doctor may adjust it based on your response and tolerance.',
          'Avoid taking Sildenafil with a high-fat meal, as it can delay the onset of effects. Excessive alcohol and grapefruit juice should also be avoided.'
        ],
      },
      {
        title: 'Amazing choice VitalityMax',
        content: [
          'VitalityMax is a compounded erectile dysfunction (ED) treatment that combines APO, Sildenafil, and Tadalafil for maximum effectiveness.',
          'It is designed to offer a more potent solution for individuals who require stronger or longer-lasting results.',
          'VitalityMax is available in different strengths, allowing you to choose the best option based on your needs and medical guidance.',
          'The "High" strength contains APO 3mg, Sildenafil 80mg, and Tadalafil 22mg, providing a balanced and highly effective ED solution.',
          'Take VitalityMax at least 30 minutes before sexual activity, and do not exceed the recommended dose. Like other ED medications, avoid combining it with excessive alcohol or nitrates.'
        ],
      }
    ]
  ,  
  weightLoss: [
    {
      title: 'Which Semaglutide Pills right for you?',
      content: [
        'Semaglutide is a GLP-1 receptor agonist used for weight management by regulating appetite and reducing calorie intake.',
        'These pills work by mimicking the hormone GLP-1, which slows down the movement of food through the stomach, helping you feel full sooner and longer.',
        'Semaglutide pills are typically taken once daily with or without food, as directed by your healthcare provider.',
        'This medication is intended to be used alongside a reduced-calorie diet and increased physical activity.',
        'Avoid taking Semaglutide with other weight-loss products without consulting your healthcare provider.'
      ],
    },
    {
      title: 'Which Tirzepatide Pills right for you?',
      content: [
        'Tirzepatide is a dual-action GLP-1 and GIP receptor agonist that helps with weight management by enhancing insulin sensitivity and controlling appetite.',
        'These pills work by slowing digestion and helping you feel fuller for longer periods after eating, supporting a lower calorie intake.',
        'Tirzepatide pills are usually taken once daily, as directed by your healthcare provider, and can be taken with or without food.',
        'This medication should be used in combination with a reduced-calorie diet and increased physical activity.',
        'Avoid using Tirzepatide with other weight-loss medications unless advised by your doctor.'
      ],
    },
    {
      title: 'Instruction for Semaglutide Injection ',
      content: [
        'Semaglutide injections are used for weight management in adults with obesity or overweight individuals who have weight-related medical problems.',
        'The medication works by mimicking the GLP-1 hormone, which regulates appetite and helps reduce food intake by making you feel full faster and longer.',
        'Semaglutide injections are typically administered once a week, as directed by your healthcare provider.',
        'This treatment is part of a comprehensive weight loss plan that includes a healthy diet and regular exercise.',
        'It is important to follow your healthcare provider’s instructions carefully when administering the injections and to not exceed the recommended dosage.'
      ],
    }],

    hairGrowth:[
      {
        title: 'Which GLP-1 is right for you?',
        content: [
          'There are a number of GLP-1 medications on the market, but they all work by slowing down gastric emptying, making you feel full faster and longer.',
          'Selecting a GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
        ],
      },
      {
        title: 'How GLP-1 Medications Work',
        content: [
          'GLP-1 medications mimic the effects of a naturally occurring hormone that slows down how quickly your stomach empties food.',
          'This can help you feel full sooner and longer after eating, which can lead to weight loss.',
          'These medications are usually taken as a once-weekly injection. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          ' help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'GLP-1 is the best fit for you.'
        ],
      },
      {
        title: 'Benefits of GLP-1 Medications',
        content: [
          'GLP-1 medications have been shown to help people lose weight and improve blood sugar levels.',
          'They can also reduce the risk of heart attack and stroke in people with type 2 diabetes.',
          'Your provider will work with you to determine the best medication and dosage for your needs. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
          'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you.'
        ],
      }
    ],
  }

// steps for home page 
export const stepsHomePage = [
    {
        label: 'Step 1 - Medical History',
        description: `Visit our website and click on the "Get Started" button.
Fill out the registration form with your personal details, including your name, email address, and phone number.
Create a secure password for your account.
Verify your email address by clicking on the link sent to your inbox.
`,
    },
    {
        label: 'Step 2 - Initial Consultation',
        description: `Log in to your account and complete the online health questionnaire.
Provide detailed information about your medical history, current health conditions, and any medications you are currently taking.
Schedule a virtual consultation with one of our licensed healthcare providers at a convenient time.
`,
    },
    {
        label: 'Step 3 - Receive Personalized Treatment Plan',
        description: `During your virtual consultation, discuss your health concerns and goals with our healthcare provider.
Based on your consultation and health questionnaire, our provider will create a personalized treatment plan tailored to your needs.
Review and approve your treatment plan in your account dashboard.
`,
    },
    {
        label: 'Step 4 - Prescription and Delivery',
        description: `Once you approve your treatment plan, our healthcare provider will prescribe the necessary medications.
Your prescription will be sent to our partner pharmacy, which will prepare and package your medications.
Medications will be delivered directly to your door in discreet packaging within 3-5 business days.
`,
    },
    {
        label: 'Step 5 - Ongoing Support',
        description: `Enjoy continuous support from our healthcare team throughout your treatment.
Schedule follow-up consultations as needed to monitor your progress and make any 
`,
    },
];

export const questions = [
  {
    question: "What is Joey Med?",
    answer: "Joey Med is a telehealth platform that connects patients with licensed healthcare providers for personalized treatment plans. We offer medications and support for weight loss, erectile dysfunction, and hair growth."
  },
  {
    question: "How do I get started with Joey Med?",
    answer: "To get started, visit our website and complete a simple online consultation. Based on your responses, our healthcare providers will create a personalized treatment plan for you."
  },
  {
    question: "Is Joey Med right for me?",
    answer: "If you are looking for convenient and confidential healthcare services for weight loss, erectile dysfunction, or hair growth, Joey Med may be right for you. Our licensed providers are here to help you achieve your health goals."
  },
  {
    question: "What services does Joey Med offer?",
    answer: "Joey Med offers a range of telehealth services, including consultations, personalized treatment plans, and prescription medications for weight loss, erectile dysfunction, and hair growth."
  },
  {
    question: "How does a telehealth appointment work?",
    answer: "Telehealth appointments at Joey Med are conducted online. After completing an initial consultation, you can schedule a virtual appointment with one of our licensed healthcare providers. During the appointment, you can discuss your health concerns and receive a treatment plan."
  },
  {
    question: "Is telehealth safe and secure?",
    answer: "Yes, telehealth services at Joey Med are safe and secure. We use encrypted platforms to ensure your personal and medical information is protected."
  },
  {
    question: "What medications does Joey Med prescribe?",
    answer: "Joey Med prescribes FDA-approved medications for weight loss, erectile dysfunction, and hair growth, including Semaglutide, Tirzepatide, Sildenafil, Tadalafil, Minoxidil, Finasteride, and Biotin."
  },
  {
    question: "How do I know which medication is right for me?",
    answer: "Our licensed healthcare providers will review your medical history and health concerns to recommend the most suitable medication for your condition."
  },
  {
    question: "Are there any side effects of the medications?",
    answer: "All medications have potential side effects. Our healthcare providers will discuss the benefits and risks of each medication with you before starting treatment."
  },
  {
    question: "How do I pay for my services?",
    answer: "You can pay for your services through our secure online payment system using credit/debit cards. We also offer payment integration with Square for seamless transactions."
  },
  {
    question: "Does Joey Med accept insurance?",
    answer: "Currently, Joey Med does not accept insurance. However, we strive to offer affordable pricing and various payment options."
  },
  {
    question: "Are there any payment plans available?",
    answer: "We offer flexible payment options to make our services accessible to everyone. Please contact our support team for more information on available payment plans."
  },
  {
    question: "How is my personal information protected?",
    answer: "Your privacy is our priority. We use advanced encryption technology to protect your personal and medical information."
  },
  {
    question: "Will my medical records be shared with anyone?",
    answer: "Your medical records are confidential and will not be shared without your consent, except as required by law."
  },
  {
    question: "What should I do if I have concerns about privacy?",
    answer: "If you have any concerns about privacy or data security, please contact our support team. We are committed to addressing your concerns and ensuring your information is protected."
  },
  {
    question: "How are medications delivered?",
    answer: "Medications are delivered directly to your door in discreet packaging to ensure your privacy."
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping times vary based on your location. Generally, medications are delivered within 3-5 business days after your order is processed."
  },
  {
    question: "What if my medication is lost or damaged during shipping?",
    answer: "If your medication is lost or damaged during shipping, please contact our support team immediately. We will work to resolve the issue and ensure you receive your medication as soon as possible."
  }
];

export const imagesSexualHomePage = [
  { src: "/images/homePage/man.png", alt: "Image 1", type:'img' },
  { src: "/videos/SexualHealth.mp4", alt: "Video", type:'video' },
  { src: "/images/homePage/products.png", alt: "Image 3" , type:'img'}
];

export const homeCards=[
  {
  animate:cardVariantsRight,
  title:'Weight Loss',
  src:'/videos/tablet.gif',
  alt:'Weight Loss',
  size:true,
  video:false,
  href:'/form/weight-loss'
}
,{
  animate:cardVariantsSmall,
  title:'Sexual health',
  src:'/videos/Bottle.mp4',
  alt:'Sexual health',
  size:true,
  video:true,
  href:'/form/weight-loss'

},{
  animate:cardVariantsLeft,
  title:'Hair growth',
  src:'/videos/hairGrowthFoa.mp4',
  alt:'Hair growth',
  size:true,
  video:true,
  href:'/form/weight-loss'
}]

export const blogCards = [
  {
    title: 'Chat with a provider 24/7',
    image: '/images/chat-provider.png',
    description: 'Get real-time support from our providers anytime, anywhere.',
  },
  {
    title: 'Manage goals in one place',
    image: '/images/manage-goals.png',
    description: 'Track your progress and make adjustments easily.',
  },
  {
    title: 'Clinically proven ingredients',
    image: '/images/clinically-proven.png',
    description: 'Access treatments that are FDA-approved and proven to work.',
  },
  {
    title: 'Fast, discreet shipping',
    image: '/images/discreet-shipping.png',
    description: 'Receive your treatment quickly and privately.',
  },
  {
    title: 'Convenient online care',
    image: '/images/online-care.png',
    description: 'Experience healthcare at your fingertips.',
  },
  {
    title: 'Personalized treatment plans',
    image: '/images/treatment-plans.png',
    description: 'Get a treatment plan tailored to your needs.',
  },
];

