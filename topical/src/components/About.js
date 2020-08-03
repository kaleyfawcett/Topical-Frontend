import React from 'react'
import { Grid, Typography } from '@material-ui/core'

const containerStyles = {
  height: '100vh',
  overflow: 'auto',
  textAlign: 'center',
  padding: '5vh'
}
function About () {
  return (
    <Grid container direction='column'>
      <div style={containerStyles}>
        <h3>About</h3>
        <Typography style={{ display: 'inline-block' }}>
        Formaldehyde

Formaldehyde is used in cosmetics as a preservative.  In personal care products, formaldehyde can be added directly, or more often, it can be released from preservatives such as quaternium-15, DMDM hydantoin, imidazolidinyl urea, diazolidinyl urea, polyoxymethylene urea, sodium hydroxymethylglycinate, bromopol and glyoxal.[1]

Bacitracin

Bacitracin is an antibiotic agent used in a variety of topical and ophthalmic (“related to the eyes”) preparations. [2]

Benzophenone-4
Benzophenone-4 protects cosmetics and personal care products from deterioration by absorbing, reflecting, or scattering UV rays. When used as sunscreen ingredients, Benzophenone-4 can help protect the skin from UV rays. [3]

Benzalkonium Chloride

Benzalkonium chloride is used as a cleanser, antiseptic, and a preservative.[2]  In cosmetics and personal care products, Benzalkonium Chloride is used in the formulation of shampoos, personal cleanliness products, skin cleansers, and skin care and eye makeup preparations.[3]

Cobalt Chloride

Cobalt chloride can be present in almost any metallic object. It is also present in hair dyes and cosmetics. Cobalt sulfate is primarily used in the preparation of pigments.[2]

Potassium Dichromate

Potassium Dichromate is commonly used to in cosmetics to create a yellow or green color.  It is sometimes found in concealers, eyeliner, eye shadow, foundations, and powder.

Nickel

Nickel compounds are not permitted ingredients in cosmetics.  However, nickel contamination can occur in products that contain iron oxides, which are used in cosmetics to impart yellow, brown, red and even black color. [4]

Neomycin

Neomycin is used widely in topical creams, ointments, lotions, eye preparations and eardrops. It is also commonly found in combination preparations with other antibacterials and topical corticosteroids. [5]

Methylisothiazolinone

Methylisothiazolinone (MI) is a widely used preservative and biocide. [2]  It can instigate an immune system response that can include itching, burning, scaling, hives, and blistering of skin [6]

Methyldibromo glutaronitrile

Methyldibromo glutaronitrile is primarily a preservative in skin care products.
Skin contact with Methyldibromo glutaronitrile may cause a rash.[2]

[1] Campaign for Safe Cosmetics. http://www.safecosmetics.org/
[2] Skin Safe. www.skinsafeproducts.com
[3] Cosmetics Info. https://cosmeticsinfo.org/
[4] Allergy Insight https://www.allergy-insight.com/
[5] DermNet NZ https://dermnetnz.org/
[6] EWG Skin Deep.

        </Typography>
      </div>
    </Grid>
  )
}

export default About
