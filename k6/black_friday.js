import http from "k6/http";
import { check, sleep } from "k6";
import { tagWithCurrentStageProfile } from "https://jslib.k6.io/k6-utils/1.3.0/index.js";

export const options = {
  stages: [
    { duration: "60s", target: 167 },
    { duration: "300", target: 167 }, // 167 * 60 = 10020
    { duration: "20s", target: 0 }
  ]
};

export default function () {
  tagWithCurrentStageProfile();

  const res = http.get("https://d16m5wbro86fg2.cloudfront.net/api/sets");
  check(res, { "status was 200": r => r.status == 200 });
  sleep(1);
}
