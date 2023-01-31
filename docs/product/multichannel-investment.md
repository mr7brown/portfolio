---
sidebar_label: "Multichannel Investments Help Brands Grow in Amazon’s Store"
sidebar_position: 1
tags: [Data Analytics, Amazon, Advertising]
---

# Multichannel Investments Help Brands Grow in Amazon’s Store

:::note Note:

Here is a [link to the published article](https://advertising.amazon.com/en-us/library/research/multichannel-investments-help-sales-and-growth/?ref_=a20m_us_libr) on Amazon's Advertising site.

:::

In this study we find that both new-to-brand customer growth and sales growth rates improve when including at least one additional multichannel investment—Streaming TV ads, video, audio, Fire TV, Fire tablet, or Freevee—with sponsored ads campaigns.

Advertisers and brands are always looking to increase sales and new-to-brand customers. But many invest only in one Amazon Ads product. In this study, we test if there are additional opportunities for brands who are only using one ad product.

This study uses data from over 25,000 Consumer Packaged Goods and Softlines brands selling in Amazon’s store between January 2019 and December 2020. In this analysis, we contrast the year-over-year performance of brands that only ran sponsored ads campaigns with brands that include at least one additional upper-funnel media channel in their existing sponsored ads campaigns. Specifically, we contrast the average year-over-year sales growth rates and new-to-brand customer growth rates between the two strategies.

To determine where there are additional opportunities, we conduct three separate analyses:

1. First, we compare the average year-over-year difference between the two approaches (sponsored ads only versus sponsored ads plus one additional upper-funnel media channel).
2. Second, we compare the average impact when increasing sponsored ads investment with brands that allocated additional ad investment to upper-funnel media channels, while controlling for ad spend.
3. Third, we run a causal study that matches brands with similar advertising abilities (ad spend, total sales, average selling price, etc.). Here, we test the performance of brands with similar advertising attributes to determine if new-to-brand and sales growth rates are higher for brands investing only in sponsored ads or sponsored ads plus one additional ad product.

Our study shows that in all three analyses, brands that adopt at least one additional ad product observe a positive impact on new-to-brand customer and sales growth rates year over year.

## New-to-brand customers and sales growth rates both increase +30% year over year for brands that combine sponsored ads plus one additional multichannel investment

In our first analysis we find that, on average, compared to brands that only run sponsored ads campaigns, brands that run campaigns which combine sponsored ads plus one additional channel see a +36% higher new-to-brand growth rate, and a +33% higher sales growth rate year over year.

![new-to-brand customers](/img/sa1.png)

## New-to-brand customers and sales growth rates are higher when adding multichannel investments to sponsored ads campaigns

In our second analysis, we use a multivariate regression model to compare the impact of increased ad spend and of adding an additional channel to the ad mix on the average sales growth rates and new-to-brand customer growth rates. Our first regression coefficient allows us to compare the year-over-year growth of new-to-brand customers and sales when sponsored ads investment is increased by 1.5x. In our second regression coefficient, we compare brands that incorporate at least one additional channel into their ad mix, while controlling for ad spend.

We find that increasing sponsored ads investment 1.5x increases new-to-brand customers by +2%, compared to +31% year over year when investing into an additional channel. Similarly, we find that sales increase +2.1% when increasing sponsored ads spend 1.5x, compared to +29% year over year when investing into an additional channel.

![new-to-brand customers](/img/sa2.png)

---

![new-to-brand customers](/img/sa3.png)

## A multichannel approach is better for new-to-brand customer growth rates and sales growth rates, compared to the single-channel approach of sponsored ads only

In our final analysis, we utilize causal analysis to determine the impact of brands investing only in sponsored ads versus brands investing in sponsored ads plus one or more upper-funnel channel. We define upper-funnel channels in this case as: video, Streaming TV ads, and media ads.

We find that brands that adopt a multichannel approach perform better—both in sales growth rate and new-to-brand customer growth rate. On average, brands that adopt a multichannel approach see a +14% increase in new-to-brand customers and a +13% sales increase year over year.

![new-to-brand customers](/img/sa4.png)

## Conclusion

As seen in this study, advertisers and brands that want to grow their new-to-brand customers and total sales should consider incorporating upper-funnel media ad campaigns with sponsored ads campaigns. Our analysis shows that brands that only run sponsored ads may be missing opportunities to increase sales and new-to-brand customers.

We find that brands that run ads on one or more emerging media channels: video, Streaming TV ads, audio, Fire TV, Fire tablet, or Freevee, in addition to sponsored ads, achieve an increase in both new-to-brand customers and sales growth rates year-over-year compared to brands that only run sponsored ads campaigns. However, an optimal combination of ad products can vary among brands. Therefore, we encourage brands to work with Amazon Ads to determine the optimal products and budget allocations for them, based on their business needs.

## Methodology

1. To perform our analysis, we first gather sales and new-to-brand data for each brand in the nine Consumer Packaged Goods and Softlines verticals between 2019 and 2020 within the United States. We then collect 52-weeks of advertising impressions in 2020 for these brands across all ad products including: Sponsored Products, Sponsored Brands, Sponsored Display, Sponsored Brands video, display, video, Streaming TV ads, Freevee, audio, Fire TV, and Fire tablets.
1. We used overall new-to-brand and sales as output variables in this analysis. In future research, we will consider performing separate research on the return on ad spend (ROAS) impact among advertisers that adopted upper-funnel ad channels. Our goal will be to understand whether there is any significant negative impact on ROAS when advertisers increase upper-funnel investment.
1. We removed outliers:
   - Brands with less than 1,000 customers in 2019 and 2020.
   - Brands whose total sales are more than 3 standard deviations from the mean.
   - Brands whose total advertising impressions are more than 3 standard deviations from the mean.
1. We calculated the year-over-year growth rates and logarithms of growth rates using the following formulas:
   - New-to-brand growth rate = 2020 new-to-brand / 2019 new-to-brand
   - Sales growth rate = 2020 Sales / 2019 Sales – 1
   - Log new-to-brand growth rate = ln(2020 new-to-brand / 2019 new-to-brand)
   - Log Sales growth rate = ln(2020 Sales / 2019 Sales)
1. Next, we grouped brands (in the propensity matching model only) based on the advertising channels leveraged in their 2020 campaigns. We conducted multivariate linear regressions with logarithms of new-to-brand or total sales growth rate as dependent variables, and brands’ total units sold or total sales, ad spend, average selling price, and channel adoption as independent variables.
1. To determine the true impact of adding additional channels to sponsored ads advertising, we also conducted a propensity score stratification analysis to calculate the weighted average lift of log new-to-brand and total sales growth rate among advertiser groups. This allowed us to compare sets of brands with similar probabilities to adopt the additional advertising channels.
1. Last, we binned the brands into 20 bins and exclude bins where the propensity scores are significantly different between treated and untreated groups. We then calculated the weighted lift of success metrics between the two groups of treated and non-treated brands, based on sample size.

Attributes used in propensity score calculation: Natural logarithm of total sales, natural logarithm of total units sold, average selling price, natural logarithm of total ad spend in 2019.

Treatment flags: Display, video/ Streaming TV ads/ emerging media adoption in 2020.

Response variable: Natural logarithm of new-to-brand growth rate, natural logarithm of total sales growth rate in 2020.
