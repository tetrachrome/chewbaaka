/**
 * biology/config.js
 * Chewbaaka
 *
 * Author   : Tomiko
 * Created  : Jul 15, 2020
 * Updated  : Jul 15, 2020
 */

export const config = {
  pageProps: {
    coverImage: "",
    title: "Biology",
    subtitle: "Subtitle TBD ...",
    pageMenuItems: [
      {
        title: "Lifecycle",
        tocImageFilename: "biology_page_toc_menu_img_01.jpg"
      },
      {
        title: "Physiology",
        tocImageFilename: "biology_page_toc_menu_img_02.jpg"
      }
    ],
  },
  contentPageSections: {
    section_Lifecycle: {
      intro: {
        title: "Lifecycle",
        content: "Content TBD ..."
      },
      subsections: {
        subsection_Lifecycle_Stage_1: {
          title: "Stage 1",
          contents: {
            paragraph_Lifecycle_Stage_1_01:
              "The female’s gestation period lasts 90 to 95 days. " +
              "This means she is pregnant for about three months.",
            paragraph_Lifecycle_Stage_1_02:
              "Shortly before she is ready to give birth, the mother " +
              "makes a den in a quiet hidden spot. She chooses her location " +
              "in the tall grass think underbrush or near a clump of rocks.",
            paragraph_Lifecycle_Stage_1_03:
              "A cheetah gives birth to an average of five to six cubs. " +
              "Each cub weights between 250 to 425 grams. Cubs are born " +
              "completely helpless and with their eyes closed, but they " +
              "developer rapidly. Scent and touch are used to find their " +
              "mother’s nipples to suckle.",
            paragraph_Lifecycle_Stage_1_04:
              "They start crawling around the nest area at four to ten days "+
              "when their eyes begin to open. At three weeks their teeth break " +
              "through the gums.",
            paragraph_Lifecycle_Stage_1_05:
              "A mother cheetah will frequently move her litter. This prevents " +
              "a build-up of scent of the den site, which may lead other predators " +
              "to the cubs. She carries very young cubs in her jaws.",
            paragraph_Lifecycle_Stage_1_06:
              "The cubs are very vulnerable to lions, hyenas and other predators when "+
              "the female leaves them alone. When hunting she may be away for up to 48 hours. " +
              "In Tanzania’s Serengeti National Park, 90% of all cubs do not reach the age " +
              "of 3 months! Other causes of death are abandonment when prey is scarce, " +
              "exposure due to low temperates or grass fires."
          }
        },
        subsection_Lifecycle_Stage_2: {
          title: "Stage 2",
          contents: {
            paragraph_Lifecycle_Stage_2_01:
              "At 1.5 to 2 months of age, the cubs leave the safety of the den " +
              "to accompany their mother. They are very vulnerable as they are not " +
              "able to defend themselves.",
            paragraph_Lifecycle_Stage_2_02:
              "They stop drinking their mother’s milk at 3 to 4 months of age. " +
              "They start eating meat and learning to hunt. The games they play and the " +
              "experiences they have during this stage will teach them skills needed to survive on their own."
          }
        },
        subsection_Lifecycle_Stage_3: {
          title: "Stage 3",
          contents: {
            paragraph_Lifecycle_Stage_3_01:
              "Stage three begins at the age 18 to 22 months when the cubs have grown " +
              "to sub-adults and leave their mother. The sub-adults will remain together for " +
              "up to six more months. At first, their success rate at capturing prey is poor.",
            paragraph_Lifecycle_Stage_3_02:
              "Cheetahs are diurnal, hunting mornings and early evenings. They rely on their " +
              "sight to find prey. They spend most of the day resting under shady trees or on " +
              "termite mounds. Night hunting is only done during a bright moon."
          }
        },
        subsection_Lifecycle_Stage_4: {
          title: "Stage 4",
          contents: {
            paragraph_Lifecycle_Stage_4_01:
              "In Stage 4, cheetahs become sexually mature. Although they are mature at 16 to 18 months, " +
              "most do not breed until they are three to five years old.",
            paragraph_Lifecycle_Stage_4_02:
              "At 20 - 30 months of age, females leave their litter-mates to find suitable mates " +
              "and start their own families. They raise their families on their own without the help of the male.",
            paragraph_Lifecycle_Stage_4_03:
              "Males usually do not breed until they are 4 to 5 years of age, and dominant in a territory. "+
              'They live alone or brothers farm permanent groups called "coalitions". '+
              "These groups stay together for life, claim territories, hunt and find mates together."
          }
        }
      },
    },
  }
};