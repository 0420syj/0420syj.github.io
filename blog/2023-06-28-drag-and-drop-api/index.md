---
slug: drag-and-drop-api
title: "HTML Drag and Drop API 🖱️"
description: "HTML Drag and Drop API에 대해 알아봅니다."
image: "./images/preview.png"
authors: [wannysim]
tags: ["html"]
enableComments: true
draft: true
---

HTML Drag and Drop API에 대해 알아봅니다.

<!-- truncate -->

HTML Drag and Drop API는 브라우저에서 Drag and Drop 기능을 사용할 수 있게 합니다. 사용자는 마우스로 Drag 가능한 요소를 선택하고, 그 요소를 Drop 가능한 요소로 Drag한 다음, 마우스 버튼을 놓아서 Drop할 수 있습니다. Drag 작업 중에는 Drag 가능한 요소의 반투명한 표현이 포인터를 따라 이동합니다. 어떤 요소가 Drag 가능하게 될 수 있는지, Drag 가능한 요소가 생성하는 피드백의 유형, Drop 가능한 요소를 사용자 정의할 수 있습니다.

# 개념 및 사용법

HTML 드래그 앤 드롭은 DOM 이벤트 모델과 마우스 이벤트에서 상속된 드래그 이벤트를 사용합니다. 일반적인 드래그 작업은 사용자가 드래그 가능한 요소를 선택하면 시작되고, 사용자가 요소를 드롭 가능한 요소로 드래그하면 계속되며, 사용자가 드래그된 요소를 놓으면 끝납니다.

드래그 작업 중에는 여러 이벤트 유형이 발생하며, 드래그와 dragover 이벤트와 같은 일부 이벤트는 여러 번 발생할 수 있습니다.

각 드래그 이벤트 유형에는 관련 이벤트 핸들러가 있습니다:

- drag: 드래그된 항목(요소 또는 텍스트 선택)이 드래그될 때 발생합니다.
- dragend: 드래그 작업이 끝날 때 발생합니다(예: 마우스 버튼을 놓거나 Esc 키를 누름).
- dragenter: 드래그된 항목이 유효한 드롭 대상에 들어갈 때 발생합니다.
- dragleave: 드래그된 항목이 유효한 드롭 대상을 떠날 때 발생합니다.
- dragover: 드래그된 항목이 유효한 드롭 대상 위로 드래그될 때마다 몇 백 밀리초마다 발생합니다.
- dragstart: 사용자가 항목을 드래그하기 시작할 때 발생합니다.
- drop: 항목이 유효한 드롭 대상에 드롭될 때 발생합니다.

# 기본사항

드래그 앤 드롭 기능을 응용 프로그램에 추가하는 기본 단계에 대한 요약입니다.

# 드래그 가능한 것 식별하기

요소를 드래그 가능하게 만들려면 드래그 가능한 속성과 dragstart 이벤트 핸들러를 추가해야 합니다.
