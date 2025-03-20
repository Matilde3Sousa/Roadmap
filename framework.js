// Toggle burger menu visibility
document.getElementById('menu-button').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
      resetFilteringControls();
    }
  });
  
  // Initialize Cytoscape
  const cy = cytoscape({
    container: document.getElementById('cy'),
    elements: [
      // Common Deep Networks
        { data: { id: 'resnet', label: 'ResNet', category: 'common_deep', age: 2016 ,  info: { links: [ { text: '<a href="https://github.com/KaimingHe/deep-residual-networks" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] }} },
        { data: { id: 'dat', label: 'DAT', category: 'common_deep', age: 2022,info: { links: [ { text: '<a href="https://github.com/LeapLabTHU/DAT" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'swin_transformer', label: 'Swin Transformer', category: 'common_deep' , age: 2021, info: { links: [ { text: '<a href="https://github.com/microsoft/Swin-Transformer" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'vgg', label: 'VGG', category: 'common_deep', age: 2015, info: { links: [ { text: '<a href="https://www.robots.ox.ac.uk/~vgg/research/very_deep/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] }} },
        { data: { id: 'xception', label: 'Xception', category: 'common_deep', age: 2017, info: { links: [ { text: '<a href="https://keras.io/api/applications/xception/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'alexnet', label: 'AlexNet', category: 'common_deep', age: 2012, info: { links: [ { text: '<a href="https://github.com/paniabhisek/AlexNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'googlenet', label: 'GoogLeNet', category: 'common_deep', age: 2015, info: { links: [ { text: '<a href="https://ieeexplore.ieee.org/document/7298594" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'inceptionv2', label: 'InceptionV2', category: 'common_deep', age: 2016, info: { links: [ { text: '<a href=https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Szegedy_Rethinking_the_Inception_CVPR_2016_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'inceptionv3', label: 'InceptionV3', category: 'common_deep', age: 2016, info: { links: [ { text: '<a href="https://www.cv-foundation.org/openaccess/content_cvpr_2016/papers/Szegedy_Rethinking_the_Inception_CVPR_2016_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'inceptionv4', label: 'InceptionV4', category: 'common_deep', age: 2017, info: { links: [ { text: '<a href="https://arxiv.org/abs/1602.07261" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'inception_resnetv1', label: 'Inception-ResNetV1', category: 'common_deep', age: 2017, info: { links: [ { text: '<a href="https://arxiv.org/abs/1602.07261" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'inception_resnetv2', label: 'Inception-ResNetV2', category: 'common_deep', age: 2017, info: { links: [ { text: '<a href="https://arxiv.org/abs/1602.07261" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } } },
        { data: { id: 'van', label: 'VAN', category: 'common_deep', age: 2023, info: { links: [ { text: '<a href="https://github.com/Visual-Attention-Network" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'mobilenet', label: 'MobileNet', category: 'common_deep', age: 2017, info: { links: [ { text: '<a href="https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'mobilenetv2', label: 'MobileNetV2', category: 'common_deep', age: 2018, info: { links: [ { text: '<a href="https://github.com/tensorflow/models/tree/master/research/slim/nets/mobilenet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'mobilenetv3', label: 'MobileNetV3', category: 'common_deep', age: 2019, info: { links: [ { text: '<a href="https://github.com/tensorflow/models/tree/master/research/slim/nets/mobilenet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'mobilenetv4', label: 'MobileNetV4', category: 'common_deep', age: 2024, info: { links: [ { text: '<a href="https://github.com/tensorflow/models/blob/master/official/vision/modeling/backbones/mobilenet.py" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'convnext', label: 'ConvNeXt', category: 'common_deep', age:2022, info: { links: [ { text: '<a href="https://github.com/facebookresearch/ConvNeXt" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'resnext', label: 'ResNeXt', category: 'common_deep', age:2017, info: { links: [ { text: '<a href="https://github.com/facebookresearch/ResNeXt" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        // INSTANCE SEGMENTATION

        { data: { id: 'ssap', label: 'SSAP', category: 'instance_segmentation', instance: { fps: null, AP: 0.36 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.41 }, age: 2019 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content_ICCV_2019/papers/Gao_SSAP_Single-Shot_Instance_Segmentation_With_Affinity_Pyramid_ICCV_2019_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {instance: { 'COCO': { AP: '32.7%', FPS: '--' }}, panoptic:{ 'COCO': { PQ: '36.9%', FPS: '--' }, 'Cityscapes': {PQ: '61.1% ~', FPS: '--'} } } }}},
        { data: { id: 'masklab', label: 'MaskLab', category: 'instance_segmentation', instance: { fps: null, AP: 0.51 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2018 , info: { links: [ { text: '<a href="https://vitalab.github.io/article/2018/07/26/masklab.html" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '38.1%', FPS: '--' }} }} } },
        { data: { id: 'mask_scoring_r-cnn', label: 'Mask Scoring R-CNN', category: 'instance_segmentation', instance: {fps: null, AP: 0.56}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/zjhuang22/maskscoring_rcnn" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '39.6%', FPS: '--' }}} } } },
        { data: { id: 'solq', label: 'SOLQ', category: 'instance_segmentation', instance: { fps: null, AP: 0.77 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/megvii-research/SOLQ" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '46.7%', FPS: '--' }} }} } },
        { data: { id: 'mask_r-cnn', label: 'Mask R-CNN', category: 'instance_segmentation', instance: { fps: 0.05, AP: 0.53 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2017 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/Detectron" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '37.1%', FPS: '5.0' }, 'Cityscapes': {AP: '32.0%', FPS: '--'}} }} }},
        { data: { id: 'faster_r-cnn', label: 'Faster R-CNN', category: 'instance_segmentation', instance: {fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2015 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/Detectron" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'fast_r-cnn', label: 'Fast R-CNN', category: 'instance_segmentation', instance: { fps: null, AP: null}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2015 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/Detectron" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'yolact++', label: 'YOLACT++', category: 'instance_segmentation', instance: {fps: 0.44, AP: 0.41}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/dbolya/yolact" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '34.6%', FPS: '27.3' }} }} } },
        { data: { id: 'yolact', label: 'YOLACT', category: 'instance_segmentation', instance: { fps: 0.55, AP: 0.27 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/dbolya/yolact" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '29.8%', FPS: '33.5' }} }} } },
        { data: { id: 'tensormask', label: 'TensorMask', category: 'instance_segmentation', instance: { fps: null, AP: 0.49 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content_ICCV_2019/html/Chen_TensorMask_A_Foundation_for_Dense_Object_Segmentation_ICCV_2019_paper.html" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '37.1%', FPS: '--' }}} } } },
        { data: { id: 'solo', label: 'SOLO', category: 'instance_segmentation', instance: { fps: 0.15, AP: 0.51 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/aim-uofa/AdelaiDet/" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '37.8%', FPS: '10.4' }} }} } },
        { data: { id: 'solov2', label: 'SOLOv2', category: 'instance_segmentation', instance: { fps: 0.51, AP: 0.62 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.45 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/aim-uofa/AdelaiDet/" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO*': { AP: '41.7/37.1%', FPS: '--/31.3' }}, panoptic:{ 'COCO': { PQ: '42.1% ~', FPS: '--'  }} } }}},
        { data: { id: 'istr_2021', label: 'ISTR', category: 'instance_segmentation', instance: { fps: 0.16, AP: 0.57 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/hujiecpp/ISTR" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '39.9%', FPS: '11.0' }} }} } },
        { data: { id: 'istr_2024', label: 'ISTR', category: 'instance_segmentation', instance: { fps: 0.01, AP: 0.84}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2024 , info: { links: [ { text: '<a href="https://github.com/hujiecpp/ISTR" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '49.7%', FPS: '2.9' }, 'Cityscapes': { AP: '36.2%', FPS: '--' }}} } } },
        { data: { id: 'queryinst', label: 'QueryInst', category: 'instance_segmentation', instance: { fps: 0.02, AP: 0.8 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/hustvl/QueryInst" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '49.1%', FPS: '3.3' }, 'Cityscapes': { AP: '34.4%', FPS: '--' }} }} } },
        { data: { id: 'panet', label: 'PANet', category: 'instance_segmentation', instance: { fps: null, AP: 0.78 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2018 , info: { links: [ { text: '<a href="https://github.com/ShuLiu1993/PANet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '46.7%', FPS: '--' }, 'Cityscapes': { AP: '36.4%', FPS: '--' }} }} } },
        { data: { id: 'panet_segfix', label: 'PANet+SegFix', category: 'instance_segmentation', instance: { fps: null, AP: 0.73}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/openseg-group/openseg.pytorch" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'Cityscapes': { AP: '37.8%', FPS: '--' }} } } }},
        { data: { id: 'segfix', label: 'SegFix', category: 'instance_segmentation', instance: { fps: null, AP: null}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age:  2020, info: { links: [ { text: '<a href="https://github.com/openseg-group/openseg.pytorch" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'polytransform_segfix', label: 'PolyTransform+SegFix', category: 'instance_segmentation', instance: { fps: null, AP: 0.89 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/openseg-group/openseg.pytorch" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'Cityscapes': { AP: '41.2%', FPS: '--' }} }} } },
        { data: { id: 'mask_r-cnn_bpr', label: 'Mask R-CNN+BPR', category: 'instance_segmentation', instance: { fps: null, AP: 0.64 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/chenhang98/BPR" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '39.2%', FPS: '--' }, 'Cityscapes': { AP: '36.9%', FPS: '--' }} } }} },
        { data: { id: 'bpr', label: 'BPR', category: 'instance_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/chenhang98/BPR" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'polytransform', label: 'PolyTransform', category: 'instance_segmentation', instance: { fps: null, AP: 0.83}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2020 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content_CVPR_2020/papers/Liang_PolyTransform_Deep_Polygon_Transformer_for_Instance_Segmentation_CVPR_2020_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {instance:{ 'Cityscapes': { AP: '40.1%', FPS: '--' }} } }} },
        { data: { id: 'neven_et_al.,_2019', label: 'Neven et al.', category: 'instance_segmentation', instance: { fps: null, AP: 0.21 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/davyneven/SpatialEmbeddings" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '27.6%', FPS: '--' }} }} } },
        { data: { id: 'htc', label: 'HTC', category: 'instance_segmentation', instance: { fps: 0, AP: 0.78 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/open-mmlab/mmdetection/tree/main/configs/htc" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '47.1%', FPS: '2.1' }} } }} },
        { data: { id: 'meinst', label: 'MEInst', category: 'instance_segmentation', instance: { fps: null, AP: 0.52 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/aim-uofa/AdelaiDet/" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '38.2%', FPS: '--' }} } }} },
        { data: { id: 'cascade_r-cnn', label: 'Cascade R-CNN', category: 'instance_segmentation', instance: { fps: null, AP: null}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2017 , info: { links: [ { text: '<a href="https://github.com/zhaoweicai/cascade-rcnn" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } } },
        { data: { id: 'cascade_mask-rcnn', label: 'Cascade Mask-RCNN', category: 'instance_segmentation', instance: { fps: null, AP: 0.58 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/zhaoweicai/cascade-rcnn" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '42.3% ~', FPS: '--' }} } }} },
        { data: { id: 'gais-net', label: 'GAIS-Net', category: 'instance_segmentation', instance: {fps: null, AP: 0.7}, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/choyingw/GAIS-Net" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'Cityscapes': { AP: '37.1%', FPS: '--' }} } }} },
        { data: { id: 'ese-seg', label: 'ESE-Seg', category: 'instance_segmentation', instance: {fps: 0.64, AP: 0 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/WenqiangX/ese_seg" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '21.6% ~', FPS: '37.1 ~' }} } }} },
        { data: { id: 'sam', label: 'SAM', category: 'instance_segmentation', instance: { fps: null, AP: 0.76 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/segment-anything" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '46.5%', FPS: '--' }} }}} },
        { data: { id: 'fastsam', label: 'FastSAM', category: 'instance_segmentation', instance: { fps: null, AP: 0.51 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/CASIA-IVA-Lab/FastSAM" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics:{instance: { 'COCO': { AP: '37.9%', FPS: '--' }} }} } },
        { data: { id: 'fastinst', label: 'FastInst', category: 'instance_segmentation', instance: { fps: 0.58, AP: 0.53 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/junjiehe96/FastInst" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '40.5%', FPS: '32.5' }} }} } },
        { data: { id: 'pep', label: 'PEP', category: 'instance_segmentation', instance: { fps: null, AP: 0.6 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content/CVPR2023W/PVUW/papers/Su_Perceive_Excavate_and_Purify_A_Novel_Object_Mining_Framework_for_CVPRW_2023_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '40.9%', FPS: '--' }} } }} },
        { data: { id: 'fassst', label: 'FASSST', category: 'instance_segmentation', instance: { fps: 1, AP: 0.46 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2022 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content/WACV2022/papers/Cheng_FASSST_Fast_Attention_Based_Single-Stage_Segmentation_Net_for_Real-Time_Instance_WACV_2022_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '34.2%', FPS: '59.2' }, 'Cityscapes': { AP: '31.1%', FPS: '47.5' }} }} } },

        // SEMANTIC SEGMENTATION
        { data: { id: 'sfnet', label: 'SFNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: { fps: 0.51, mIoU: 0.8 }, panoptic: { fps: null, PQ: 0.47 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/lxtGH/SFSegNets" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '81.8/74.5%', FPS: '--/121' }, 'CamVid*': { mIoU: '73.8/70.4%', FPS: '35.5/134.1' }}, panoptic:{'ADE20K': {PQ: '44.7', FPS: '--'}} } } } },
        { data: { id: 'sfnet-lite', label: 'SFNet-Lite', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.43, mIoU: 0.66}, panoptic: {fps: null, PQ: null}, age:  2022, info: { links: [ { text: '<a href="https://github.com/lxtGH/SFSegNets" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '79.0/78.8%', FPS: '92.3/119.1' } } } } }},
        { data: { id: 'pan', label: 'PAN', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.64}, panoptic: { fps: null, PQ: null }, age: 2018 , info: { links: [ { text: '<a href="https://arxiv.org/abs/1805.10180" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '78.6%', FPS: '--' } } } } }},
        { data: { id: 'deeplabv3', label: 'DeepLabv3', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.81}, panoptic: { fps: null, PQ: null }, age: 2017 , info: { links: [ { text: '<a href="https://github.com/VainF/DeepLabV3Plus-Pytorch" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '81.3%', FPS: '--' } } } } }},
        { data: { id: 'deeplabv3+', label: 'DeepLabv3+', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.86}, panoptic: { fps: null, PQ: null }, age: 2018 , info: { links: [ { text: '<a href="https://github.com/VainF/DeepLabV3Plus-Pytorch" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '82.1%', FPS: '--' } } } } }},
        { data: { id: 'cpnet', label: 'CPNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.81}, panoptic: { fps: null, PQ: 0.44 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/angiecao/CPNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '81.3%', FPS: '--' } }, panoptic: {'ADE20K': {PQ: '46.3 ~', FPS: '--'}} } } }},
        { data: { id: 'acfnet', label: 'ACFNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.84}, panoptic: { fps: null, PQ: null }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/zrl4836/ACFNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '81.8%', FPS: '--' } } } } }},
        { data: { id: 'stdc', label: 'STDC', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.96, mIoU:0.56}, panoptic: { fps: null, PQ: null }, age: 2021, info: { links: [ { text: '<a href="https://github.com/MichaelFan01/STDC-Seg" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '76.8/71.9%', FPS: '97.0/250.4' }, 'CamVid*': { mIoU: '73.9/73.0%', FPS: '152.2/197.6' } } } } }},
        { data: { id: 'bisenetv3', label: 'BiSeNetV3', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.94, mIoU:0.7}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://www.sciencedirect.com/science/article/pii/S0925231223001649" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '79.0/73.5%', FPS: '93.8/244.3' }, 'CamVid*': { mIoU: '76.6/75.1%', FPS: '147.6/198.4' } } } } }},
        { data: { id: 'bisenetv2', label: 'BiSeNetV2', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.6, mIoU: 0.55}, panoptic: { fps: null, PQ: null },age: 2021 , info: { links: [ { text: '<a href="https://github.com/yu-changqian/BiSeNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '75.3/72.6%', FPS: '47.3/156' } , 'CamVid*': { mIoU: '78.5/72.4%', FPS: '32.7/124.5' } } } } }},
        { data: { id: 'bisenet', label: 'BiSeNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.38, mIoU: 0.38}, panoptic: { fps: null, PQ: null }, age: 2018 , info: { links: [ { text: '<a href="https://github.com/yu-changqian/BiSeNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '74.7/68.4%', FPS: '65.5/105.8' }, 'CamVid': { mIoU: '68.7%', FPS: '--' } } } } }},
        { data: { id: 'lawin_transformer', label: 'Lawin Transformer', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 1}, panoptic: { fps: null, PQ: 0.92 }, age: 2022 , info: { links: [ { text: '<a href="https://arxiv.org/abs/2201.01615" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '84.4%', FPS: '--' } }, panoptic: {'ADE20K': {PQ: '56.2', FPS: '--'}} } } }},
        { data: { id: 'fcn', label: 'FCN', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2015 , info: { links: [ { text: '<a href="https://www.cv-foundation.org/openaccess/content_cvpr_2015/papers/Long_Fully_Convolutional_Networks_2015_CVPR_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } }},
        { data: { id: 'parsenet', label: 'ParseNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2015 , info: { links: [ { text: '<a href="https://github.com/weiliu89/caffe/tree/fcn" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] } }},
        { data: { id: 'pp-liteseg', label: 'PP-LiteSeg', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 1, mIoU: 0.61}, panoptic: { fps: null, PQ: null }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/PaddlePaddle/PaddleSeg" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '77.5/72.0%', FPS: '102.6/273.6' }, 'CamVid*': { mIoU: '75.0/73.3%', FPS: '154.8/222.3' } } } } }},
        { data: { id: 'fassd-net', label: 'FASSD-Net', category: 'semantic_segmentation',  instance: { fps: null, AP: null }, semantic: {fps: 0.14, mIoU: 0.65}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/GibranBenitez/FASSD-Net" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '78.8%', FPS: '41.1' } } } } }},
        { data: { id: 'u-net', label: 'U-Net', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2015 , info: { links: [ { text: '<a href="https://lmb.informatik.uni-freiburg.de/people/ronneber/u-net/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] } }},
        { data: { id: 'pidnet', label: 'PIDNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps:0.47, mIoU: 0.86}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/XuJiacong/PIDNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '80.6/78.2%', FPS: '31.1/100.8' }, 'CamVid*': { mIoU: '82.0/70.1%', FPS: '85.6/153.7' } } } } }},
        { data: { id: 'pspnet', label: 'PSPNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.74}, panoptic: { fps: null, PQ: null }, age: 2017 , info: { links: [ { text: '<a href="https://github.com/xitongpu/PSPNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '80.2%', FPS: '--' } } } } }},
        { data: { id: 'regseg;', label: 'RegSeg', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.19, mIoU: 0.77}, panoptic: { fps: null, PQ: null }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/RolandGao/RegSeg" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '79.1/77.5%', FPS: '11.3/18.3' }, 'CamVid': { mIoU: '80.9%', FPS: '112' } } } } }},
        { data: { id: 'segnext', label: 'SegNeXt', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.08, mIoU: 0.93}, panoptic: { fps: null, PQ: 0.42 }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/Visual-Attention-Network/SegNeXt" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '78.0/83.2%', FPS: '25' } }, panoptic: {'ADE20K': {PQ: '51.0%', FPS: '--'}} } } }},
        { data: { id: 'ccnet', label: 'CCNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.81}, panoptic: { fps: null, PQ: 0.4 }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/speedinghzl/CCNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '81.4%', FPS: '--' } }, panoptic: {'ADE20K': {PQ: '45.2% ~', FPS: '--'}}} } }},
        { data: { id: 'vit', label: 'ViT-Adapter', category: 'semantic_segmentation', instance: { fps: null, AP: 0.95 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 1 }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/czczup/ViT-Adapterr" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {instance:{ 'COCO': { AP: '53.0%', FPS: '--' }}, panoptic: {'ADE20K': {PQ: '61.2% ~', FPS: '--'}} } } } },
        { data: { id: 'segformer', label: 'SegFormer', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.16, mIoU: 0.71}, panoptic: { fps: 0.24, PQ: 0.65 }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/NVlabs/SegFormer" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '84.0/71.9% ~', FPS: '2.5/47.6 ~' } }, panoptic: {'ADE20K*': {PQ: '51.8/37.4% ~', FPS: '9.8/50.5 ~'}} } } }},
        { data: { id: 'metaseg', label: 'MetaSeg', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.89}, panoptic: { fps: null, PQ: 0.62 }, age: 2024 , info: { links: [ { text: '<a href="https://github.com/hyunwoo137/MetaSeg" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '82.7%', FPS: '--' } }, panoptic: {'ADE20K': {PQ: '48.5%', FPS: '--'}} } } }},
        { data: { id: 'icnet', label: 'ICNet', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.13, mIoU: 0.16}, panoptic: { fps: null, PQ: null }, age: 2018 , info: { links: [ { text: '<a href="https://github.com/hszhao/ICNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '70.6%', FPS: '30.3' }, 'CamVid': { mIoU: '67.1%', FPS: '27.8' } } } } }},
        { data: { id: 'ocr', label: 'OCR', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.99}, panoptic: { fps: null, PQ: 0.42 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/openseg-group/openseg.pytorch" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '84.2%', FPS: '--' } }, panoptic: {'ADE20K': {PQ: '45.7% ~', FPS: '--'}} } } }},
        { data: { id: 'setr', label: 'SETR', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.83}, panoptic: { fps: null, PQ: 0.69 }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/fudan-zvg/SETR" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '81.6%', FPS: '--' } }, panoptic: {'ADE20K': {PQ: '50.3%', FPS: '--'}} } } }},
        { data: { id: 'segmenter', label: 'Segmenter', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.81}, panoptic: { fps: null, PQ: null }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/rstrudel/segmenter" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes': { mIoU: '81.3%', FPS: '--' } } } } }},
        { data: { id: 'polymax', label: 'PolyMaX', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: null }, age: 2024 , info: { links: [ { text: '<a href=https://openaccess.thecvf.com/content/WACV2024/papers/Yang_PolyMaX_General_Dense_Prediction_With_Mask_Transformer_WACV_2024_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ]} }},
        { data: { id: 'rtformer', label: 'RTFormer', category: 'semantic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: 0.54, mIoU: 0.8}, panoptic: { fps: 1, PQ: 0.36 }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/PaddlePaddle/PaddleSeg/tree/release/2.10/configs/rtformer" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {semantic:{ 'Cityscapes*': { mIoU: '79.3/76.3%', FPS: '39.1/110.0' }, 'CamVid*': { mIoU: '82.5/81.4%', FPS: '94.0/190.7' } },panoptic: {'ADE20K*': {PQ: '42.1/36.7%', FPS: '71.4/187.9'}} } } }},

        // PANOPTIC SEGMENTATION
        { data: { id: 'upsnet', label: 'UPSNet', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.68}, panoptic: { fps: null, PQ: 0.68 }, age: 2019 , info: { links: [ { text: '<a href="https://github.com/uber-research/UPSNet" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '46.6%', FPS: '--' }, 'Cityscapes': { PQ: '61.8%', FPS: '--' }}, semantic: {'Cityscapes': {mIoU: '79.2%', FPS: '--'}},instance:{ 'Cityscapes': { AP: '39.0%', FPS: '--' }} } } } },
        { data: { id: 'spatialflow', label: 'SpatialFlow', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.65 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/chensnathan/SpatialFlow" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '47.9%', FPS: '--' }, 'Cityscapes': { PQ: '62.5% ~', FPS: '--' } } } } }},
        { data: { id: 'axial-deeplab', label: 'Axial-Deeplab', category: 'panoptic_segmentation', instance: { fps: null, AP: 0.81 }, semantic: {fps: null, mIoU: 0.98}, panoptic: { fps: null, PQ: 0.82 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/csrhddlam/axial-deeplab" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '44.2%', FPS: '--' }, 'Cityscapes': { PQ: '65.6%', FPS: '--' } }, semantic: {'Cityscapes': {mIoU: '84.1%', FPS: '--'}}, instance:{ 'Cityscapes': { AP: '39.6%', FPS: '--' }} } } } },
        { data: { id: 'remax', label: 'ReMaX', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: 0.43, PQ: 0.68 }, age: 2024 , info: { links: [ { text: '<a href="https://proceedings.neurips.cc/paper_files/paper/2023/file/e8e30fda5ab87ea93360a36288ac0145-Paper-Conference.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {panoptic:{ 'COCO*': { PQ: '54.2/40.4% ~', FPS: '16.3/108.7 ~' }, 'Cityscapes*': { PQ: '65.4/57.5% ~', FPS: '9.0/25.6 ~' } } } } }},
        { data: { id: 'deeperlab', label: 'DeeperLab', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: 0, PQ: 0.28 }, age:  2019, info: { links: [ { text: '<a href="https://deeperlab.mit.edu/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '34.3%', FPS: '--' }, 'Cityscapes': { PQ: '65.5% ~', FPS: '--' } } } } }},
        { data: { id: 'panoptic-deeplab', label: 'Panoptic-DeepLab', category: 'panoptic_segmentation',instance: { fps: null, AP: 0.54 }, semantic: {fps: null, mIoU: 0.99}, panoptic: { fps: null, PQ: 0.77 }, age: 2020 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content_CVPR_2020/html/Cheng_Panoptic-DeepLab_A_Simple_Strong_and_Fast_Baseline_for_Bottom-Up_Panoptic_CVPR_2020_paper.htmlr" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '41.4%', FPS: '--' }, 'Cityscapes': { PQ: '65.6%', FPS: '--' } }, semantic: {'Cityscapes': {mIoU: '84.2', FPS: '--'}}, instance:{ 'COCO': { AP: '39.0%', FPS: '--' }} } } } },
        { data: { id: 'panoptic_segformer', label: 'Panoptic SegFormer', category: 'panoptic_segmentation',instance: { fps: null, AP: 0.62 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.52 }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/zhiqi-li/Panoptic-SegFormer" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '56.2%', FPS: '--' }},instance:{ 'COCO': { AP: '41.7%', FPS: '--' }} } }} },
        { data: { id: 'mask2former', label: 'Mask2Former', category: 'panoptic_segmentation', instance: { fps: 0.03, AP: 0.91 }, semantic: {fps: null, mIoU: 0.93}, panoptic: { fps: null, PQ: 0.92 }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/Mask2Former" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '58.3%', FPS: '--' }, 'Cityscapes': { PQ: '66.6% ~', FPS: '--' } },semantic: {'Cityscapes': {mIoU: '83.3% ~', FPS: '--'}},instance:{ 'COCO': { AP: '50.1% ~', FPS: '4.0 ~'}, 'Cityscapes': {AP: '43.7 ~', FPS:'--'}} } }} },
        { data: { id: 'maskformer', label: 'MaskFormer', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.56}, panoptic: { fps: 0, PQ: 0.41 }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/MaskFormer/tree/main?tab=readme-ov-file" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '52.7% ~', FPS: '5.2' }}, semantic: {'Cityscapes': {mIoU: '81.4 ~', FPS: '--'}} } } } },
        { data: { id: 'yoso', label: 'YOSO', category: 'panoptic_segmentation', instance: { fps: 0.73, AP: 0.39 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: 0.5, PQ: 0.48 }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/hujiecpp/YOSO" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] , realMetrics: {panoptic:{ 'COCO*': { PQ: '48.4/46.4% ~', FPS: '23.6/45.& ~' }, 'Cityscapes*': { PQ: '59.7/52.5% ~', FPS: '11.1/22.6 ~' }},instance:{ 'COCO': { AP: '35.6/33.0% ~', FPS: '33.5/46.1 ~' }} }} } },
        { data: { id: 'ada-segment', label: 'Ada-Segment', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.37 }, age: 2021 , info: { links: [ { text: '<a href="https://ojs.aaai.org/index.php/AAAI/article/view/16445" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] , realMetrics: {panoptic:{ 'COCO': { PQ: '48.5%', FPS: '--' } }} } }},
        { data: { id: 'refine', label: 'REFINE', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.75 }, age: 2021 , info: { links: [ { text: '<a href="https://ojs.aaai.org/index.php/AAAI/article/view/16349" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '51.5%', FPS: '--' } } } } } },
        { data: { id: 'efficientps', label: 'EfficientPS', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.86}, panoptic: { fps: null, PQ: 0.93 }, age: 2021 , info: { links: [ { text: '<a href="https://panoptic.cs.uni-freiburg.de/" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] , realMetrics: {panoptic:{ 'Cityscapes': { PQ: '67.1%', FPS: '--' }}, semantic: {'Cityscapes': {mIoU: '82.1% ~', FPS: '--'}},instance:{ 'Cityscapes': { AP: '43.8% ~', FPS: '--' }} }} } },
        { data: { id: 'panonet', label: 'PanoNet', category: 'panoptic_segmentation', instance: { fps: 0, AP: 0.36 }, semantic: {fps: 0.06, mIoU: 0.39}, panoptic: { fps: 0.64, PQ: 0.3 }, age: 2020 , info: { links: [ { text: '<a href="https://arxiv.org/abs/2008.00192" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] , realMetrics: {panoptic:{ 'Cityscapes': { PQ: '55.1%', FPS: '20' }},semantic: {'Cityscapes': {mIoU: '74.6% ~', FPS: '20'}}, instance:{ 'Cityscapes': { AP: '23.1% ~', FPS: '20 ~' }} }} } },
        { data: { id: 'max-deeplab', label: 'MaX-DeepLab', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.74 }, age: 2021 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content/CVPR2021/papers/Wang_MaX-DeepLab_End-to-End_Panoptic_Segmentation_With_Mask_Transformers_CVPR_2021_paper.pdfr" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '51.3%', FPS: '--' } } } } }},
        { data: { id: 'cmt-deeplab', label: 'CMT-DeepLab', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: 0.81}, panoptic: { fps: null, PQ: 0.92 },age: 2022 , info: { links: [ { text: '<a href="https://openaccess.thecvf.com/content/CVPR2022/papers/Yu_CMT-DeepLab_Clustering_Mask_Transformers_for_Panoptic_Segmentation_CVPR_2022_paper.pdf" target="_blank"><img src="https://cdn-icons-png.flaticon.com/128/2920/2920849.png" width=20% height=20%></a>'} ] , realMetrics: {panoptic:{ 'COCO': { PQ: '55.7%', FPS: '--' }, 'Cityscapes': { PQ: '64.6%', FPS: '--' }}, semantic: {'Cityscapes': {mIoU: '81.4', FPS: '--'}} }} } },
        { data: { id: 'k-net', label: 'K-Net', category: 'panoptic_segmentation',instance: { fps: 0.23, AP: 0.59 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.87 }, age: 2021 , info: { links: [ { text: '<a href="https://github.com/ZwwWayne/K-Net/" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] , realMetrics: {panoptic:{ 'COCO': { PQ: '55.2%', FPS: '--' },instance:{ 'Cityscapes': { AP: '40.6%', FPS: '15.5' }} }} } }},
        { data: { id: 'rt-k-net', label: 'RT-K-Net', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: 1, PQ: 0.35 }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/uulm-mrm/RT-K-Net" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] , realMetrics: {panoptic:{ 'Cityscapes': { PQ: '60.2% ~', FPS: '31.3 ~' } }} } }},
        { data: { id: 'maskconver', label: 'MaskConver', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: 1, PQ: 0.73 }, age: 2024 , info: { links: [ { text: '<a href="https://github.com/tensorflow/models/tree/master/official/projects/maskconver" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] , realMetrics: {panoptic:{ 'COCO*': { PQ: '53.6/29.7% ~', FPS: '19.6/375 ~' } }} } }},
        { data: { id: 'detr', label: 'DETR', category: 'panoptic_segmentation',instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.54 }, age: 2020 , info: { links: [ { text: '<a href="https://github.com/facebookresearch/detr" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '45.1% ~', FPS: '--' } } } } }},
        { data: { id: 'kmax-deeplab', label: 'kMAX-DeepLab', category: 'panoptic_segmentation', instance: { fps: 0, AP: 0.91 }, semantic: {fps: 0, mIoU: 0.68}, panoptic: { fps: 0.1, PQ: 0.91 }, age: 2022 , info: { links: [ { text: '<a href="https://github.com/google-research/deeplab2/blob/main/g3doc/projects/kmax_deeplab.md" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '58.5%', FPS: '6.7' }, 'Cityscapes': {PQ: '68.4% ~', FPS:'3.1 ~'}},semantic: {'Cityscapes': {mIoU: '83.5% ~', FPS: '3.1'}},instance:{ 'Cityscapes': { AP: '44.0% ~', FPS: '3.1' }} } } } },
        { data: { id: 'mask_dino', label: 'Mask DINO', category: 'panoptic_segmentation', instance: { fps: null, AP: 1 }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 1 }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/IDEA-Research/MaskDINO" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ], realMetrics: {panoptic:{ 'COCO': { PQ: '59.4%', FPS: '--' }},instance:{ 'COCO': { AP: '54.7%', FPS: '--' }} } } } },
        { data: { id: 'pix2seq-d', label: 'Pix2Seq-D', category: 'panoptic_segmentation', instance: { fps: null, AP: null }, semantic: {fps: null, mIoU: null}, panoptic: { fps: null, PQ: 0.68 }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/google-research/pix2seq" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] , realMetrics: {panoptic:{ 'COCO': { PQ: '50.2% ~', FPS: '--' }, 'Cityscapes': { PQ: '64.0% ~', FPS: '--' } }} } }},
        { data: { id: 'mp-former', label: 'MP-Former', category: 'panoptic_segmentation', instance: { fps: 0.03, AP: 0.93 }, semantic: {fps: null, mIoU: 0.71}, panoptic: { fps: 0, PQ: 0.87 }, age: 2023 , info: { links: [ { text: '<a href="https://github.com/IDEA-Research/MP-Former" target="_blank"><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width=10% height=10%></a>'} ] , realMetrics: {panoptic:{ 'COCO': { PQ: '58.1% ~', FPS: '4.0' }, 'Cityscapes':{PQ: '67.5% ~', FPS: '--'}}, semantic: {'Cityscapes': {mIoU: '83.9% ~', FPS: '--'}},instance:{ 'COCO': { AP: '50.8% ~', FPS: '4.0 ~' }, 'Cityscapes': { AP: '44.9% ~', FPS: '--' }} }} } },
        // Example Connections
        
        { data: { id: 'ssap_resnet', source: 'ssap', target: 'resnet' } },
        { data: { id: 'masklab_resnet', source: 'masklab', target: 'resnet' } },
        { data: { id: 'mask_scoring_r-cnn_resnet', source: 'mask_scoring_r-cnn', target: 'resnet' } },
        { data: { id: 'mask_scoring_r-cnn_mask_r-cnn', source: 'mask_scoring_r-cnn', target: 'mask_r-cnn' } },
        { data: { id: 'solq_resnet', source: 'solq', target: 'resnet' } },
        { data: { id: 'mask_r-cnn_faster_r-cnn', source: 'mask_r-cnn', target: 'faster_r-cnn' } },
        { data: { id: 'mask_r-cnn_resnet', source: 'mask_r-cnn', target: 'resnet' } },
        { data: { id: 'faster_r-cnn_fast_r-cnn', source: 'faster_r-cnn', target: 'fast_r-cnn' } },
        { data: { id: 'faster_r-cnn_vgg', source: 'faster_r-cnn', target: 'vgg' } },
        { data: { id: 'fast_r-cnn_vgg', source: 'fast_r-cnn', target: 'vgg' } },
        { data: { id: 'yolact++_yolact', source: 'yolact++', target: 'yolact' } },
        { data: { id: 'yolact_resnet', source: 'yolact', target: 'resnet' } },
        { data: { id: 'tensormask_resnet', source: 'tensormask', target: 'resnet' } },
        { data: { id: 'solo_resnet', source: 'solo', fps: 2, AP: 1, target: 'resnet' } },
        { data: { id: 'solov2_solo', source: 'solov2', fps: 1, AP: 2, target: 'solo' } },
        { data: { id: 'istr2021_resnet', source: 'istr_2021', target: 'resnet' } },
        { data: { id: 'istr2024_istr2021', source: 'istr_2024', target: 'istr_2021' } },
        { data: { id: 'sfnet_resnet', source: 'sfnet', target: 'resnet' } },
        { data: { id: 'sfnet-lite_sfnet', source: 'sfnet-lite', target: 'sfnet' } },
        { data: { id: 'sfnet-lite_resnet', source: 'sfnet-lite', target: 'resnet' } },
        { data: { id: 'sfnet-lite_stdc', source: 'sfnet-lite', target: 'stdc' } },
        { data: { id: 'pan_resnet', source: 'pan', target: 'resnet' } },
        { data: { id: 'deeplabv3_resnet', source: 'deeplabv3', target: 'resnet' } },
        { data: { id: 'deeplabv3+_deeplabv3', source: 'deeplabv3+', target: 'deeplabv3' } },
        { data: { id: 'deeplabv3+_xception', source: 'deeplabv3+', target: 'xception' } },
        { data: { id: 'cpnet_resnet', source: 'cpnet', target: 'resnet' } },
        { data: { id: 'acfnet_to_to_resnet', source: 'acfnet', target: 'resnet' } },
        { data: { id: 'upsnet_to_to_resnet', source: 'upsnet', target: 'resnet' } },
        { data: { id: 'upsnet_to_to_mask_r-cnn', source: 'upsnet', target: 'mask_r-cnn' } },
        { data: { id: 'spatialflow_resnet', source: 'spatialflow', target: 'resnet' } },
        { data: { id: 'remax_resnet', source: 'remax', target: 'resnet' } },
        { data: { id: 'remax_convnext', source: 'remax', target: 'convnext' } },
        { data: { id: 'bisenetv3_bisenetv2', source: 'bisenetv3', target: 'bisenetv2' } },
        { data: { id: 'bisenetv3_stdc', source: 'bisenetv3', target: 'stdc' } },
        { data: { id: 'bisenetv2_bisenet', source: 'bisenetv2', target: 'bisenet' } },
        { data: { id: 'bisenet_resnet', source: 'bisenet', target: 'resnet' } },
        { data: { id: 'bisenet_xception', source: 'bisenet', target: 'xception' } },
        { data: { id: 'deeperlab_xception', source: 'deeperlab', target: 'xception' } },
        { data: { id: 'deeperlab_deeplabv3+', source: 'deeperlab', target: 'deeplabv3+' } },
        { data: { id: 'panoptic-deeplab_xception', source: 'panoptic-deeplab', target: 'xception' } },
        { data: { id: 'panoptic-deeplab_deeplabv3+', source: 'panoptic-deeplab', target: 'deeplabv3+' } },
        { data: { id: 'lawin_transformer_swin_transformer', source: 'lawin_transformer', target: 'swin_transformer' } },
        { data: { id: 'queryinst_swin_transformer', source: 'queryinst', target: 'swin_transformer' } },
        { data: { id: 'panoptic_segformer_swin_transformer', source: 'panoptic_segformer', target: 'swin_transformer' } },
        { data: { id: 'mask2former_maskformer', source: 'mask2former', target: 'maskformer' } },
        { data: { id: 'mask2former_swin_transformer', source: 'mask2former', target: 'swin_transformer' } },
        { data: { id: 'maskformer_swin_transformer', source: 'maskformer', target: 'swin_transformer' } },
        { data: { id: 'panet_mask_r-cnn', source: 'panet', target: 'mask_r-cnn' } },
        { data: { id: 'segfix_panet', source: 'segfix', target: 'panet' } },
        { data: { id: 'segfix_polytransform', source: 'segfix', target: 'polytransform' } },
        { data: { id: 'bpr_polytransform', source: 'bpr', target: 'polytransform' } },
        { data: { id: 'bpr_mask_r-cnn', source: 'bpr', target: 'mask_r-cnn' } },
        { data: { id: 'htc_resnext', source: 'htc', target: 'resnext' } },
        { data: { id: 'meinst_resnext', source: 'meinst', target: 'resnext' } },
        { data: { id: 'yoso_resnet', source: 'yoso', target: 'resnet' } },
        { data: { id: 'ada-segment_resnet', source: 'ada-segment', target: 'resnet' } },
        { data: { id: 'ada-segment_cascade_r-cnn', source: 'ada-segment', target: 'cascade_r-cnn' } },
        { data: { id: 'cascade_r-cnn_mask_r-cnn', source: 'cascade_r-cnn', target: 'mask_r-cnn' } },
        { data: { id: 'cascade_mask-rcnn_cascade_r-cnn', source: 'cascade_mask-rcnn', target: 'cascade_r-cnn' } },
        { data: { id: 'cascade_mask-rcnn_resnext', source: 'cascade_mask-rcnn', target: 'resnext' } },
        { data: { id: 'gais-net_resnet', source: 'gais-net', target: 'resnet' } },
        { data: { id: 'fastsam_sam', source: 'fastsam', target: 'sam' } },
        { data: { id: 'pp-liteseg_stdc', source: 'pp-liteseg', target: 'stdc' } },
        { data: { id: 'pspnet_resnet', source: 'pspnet', target: 'resnet' } },
        { data: { id: 'ccnet_resnet', source: 'ccnet', target: 'resnet' } },
        { data: { id: 'refine_resnext', source: 'refine', target: 'resnext' } },
        { data: { id: 'efficientps_mask_r-cnn', source: 'efficientps', target: 'mask_r-cnn' } },
        { data: { id: 'panonet_icnet', source: 'panonet', target: 'icnet' } },
        { data: { id: 'max-deeplab_solov2', source: 'max-deeplab', target: 'solov2' } },
        { data: { id: 'max-deeplab_panoptic-deeplab', source: 'max-deeplab', target: 'panoptic-deeplab' } },
        { data: { id: 'max-deeplab_axial-deeplab', source: 'max-deeplab', target: 'axial-deeplab' } },
        { data: { id: 'cmt-deeplab_max-deeplab', source: 'cmt-deeplab', target: 'max-deeplab' } },
        { data: { id: 'cmt-deeplab_axial-deeplab', source: 'cmt-deeplab', target: 'axial-deeplab' } },
        { data: { id: 'fastinst_resnet', source: 'fastinst', target: 'resnet' } },
        { data: { id: 'pep_resnet', source: 'pep', target: 'resnet' } },
        { data: { id: 'fassst_mobilenet', source: 'fassst', target: 'mobilenet' } },
        { data: { id: 'icnet_pspnet', source: 'icnet', target: 'pspnet' } },
        { data: { id: 'k-net_swin_transformer', source: 'k-net', target: 'swin_transformer' } },
        { data: { id: 'rt-k-net_k-net', source: 'rt-k-net', target: 'k-net' } },
        { data: { id: 'rt-k-net_rtformer', source: 'rt-k-net', target: 'rtformer' } },
        { data: { id: 'maskconver_resnet', source: 'maskconver', target: 'resnet' } },
        { data: { id: 'maskconver_mobilenet', source: 'maskconver', target: 'mobilenet' } },
        { data: { id: 'detr_resnet', source: 'detr', target: 'resnet' } },
        { data: { id: 'kmax-deeplab_convnext', source: 'kmax-deeplab', target: 'convnext' } },
        { data: { id: 'mask_dino_swin_transformer', source: 'mask_dino', target: 'swin_transformer' } },
        { data: { id: 'pix2seq-d_resnet', source: 'pix2seq-d', target: 'resnet' } },
        { data: { id: 'fastinst_mask2former', source: 'fastinst', target: 'mask2former' } },
        { data: { id: 'googlenet_inceptionv2', source: 'inceptionv2', target: 'googlenet' } },
        { data: { id: 'inceptionv2_inceptionv3', source: 'inceptionv3', target: 'inceptionv2' } },
        { data: { id: 'inceptionv3_inceptionv4', source: 'inceptionv4', target: 'inceptionv3' } },
        { data: { id: 'inceptionv4_inception_resnetv1', source: 'inception_resnetv1',  target: 'inceptionv4' } },
        { data: { id: 'resnet_inception_resnetv1', source:'resnet',  target: 'inception_resnetv1' } },
        { data: { id: 'inceptionv4_inception_resnetv2', source: 'inception_resnetv2',  target: 'inceptionv4' } },
        { data: { id: 'resnet_inception_resnetv2', source:'inception_resnetv2',   target: 'resnet' } },
        { data: { id: 'mobilenetv2_mobilenet', source:'mobilenetv2',   target: 'mobilenet' } },
        { data: { id: 'mobilenetv3_mobilenetv2', source:'mobilenetv3',   target: 'mobilenetv2' } },
        { data: { id: 'mobilenetv4_mobilenetv3', source:'mobilenetv4',   target: 'mobilenetv3' } },
        { data: { id: 'resnext_resnet', source:'resnext',   target: 'resnet' } },
        { data: { id: 'convnext_resnet', source:'convnext',   target: 'resnet' } },
    ],
    style: [
      {
        selector: 'node',
        style: {
          label: 'data(label)',
          color: '#FFFFFF',
          'text-valign': 'center',
          'text-halign': 'center',
          'font-size': '10px',
          'border-color': '#000',
          'border-width': 1,
          'text-outline-width': 1,
          'text-outline-color': '#000'
        }
      },
      {
        selector: 'node[category = "common_deep"]',
        style: {
          'background-color': 'salmon',
          'text-outline-color': 'salmon'
        }
      },
      {
        selector: 'node[category = "instance_segmentation"]',
        style: {
          'background-color': 'orange',
          'text-outline-color': 'orange'
        }
      },
      {
        selector: 'node[category = "semantic_segmentation"]',
        style: {
          'background-color': '#9b6ae5',
          'text-outline-color': '#9b6ae5'
        }
      },
      {
        selector: 'node[category = "panoptic_segmentation"]',
        style: {
          'background-color': '#6ADAE5',
          'text-outline-color': '#6ADAE5'
        }
      },
      {
        selector: 'edge',
        style: {
          width: 2,
          'line-color': '#666',
          'target-arrow-color': '#666',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      },
      {
        selector: '.hidden',
        style: {
          display: 'none'
        }
      }
    ],
    layout: {
      name: 'cola',
      nodeSpacing: 5,
      edgeLengthVal: 10,
      animate: true,
      randomize: false,
      avoidOverlap: true
    }
  });
  
  // Popup for node details
  const popup = document.getElementById('node-popup');
  let currentPopupNode = null;
  
  // Show popup and highlight connections on node click
  cy.on('tap', 'node', function (evt) {
    const node = evt.target;
    currentPopupNode = node;
    const nodeData = node.data();
    const nodeLabel = nodeData.label;
    const age = nodeData.age;
    let linksHtml = '';
  
    if (nodeData.info && nodeData.info.links) {
      // Assuming links now have a 'url' and 'text' property
      linksHtml = nodeData.info.links.map(link =>
        `<a href="${link.url}" target="_blank">${link.text}</a><br>`
      ).join('');
    }
  
    // Helper function to capitalize first letter
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  
    // Mapping for tasks and metric names
    const taskMetricsMapping = {
      instance: { m1: "AP", m2: "FPS" },
      semantic: { m1: "mIoU", m2: "FPS" },
      panoptic: { m1: "PQ", m2: "FPS" }
    };
    const tasksOrder = ["semantic", "instance", "panoptic"];
    const primaryTask = nodeData.category.split('_')[0];
    let tablesHtml = "";
    const realMetrics = nodeData.info && nodeData.info.realMetrics;
  
    function buildTableForTask(task) {
      if (!realMetrics || !realMetrics[task]) return "";
      const datasets = realMetrics[task];
      const m1Label = taskMetricsMapping[task].m1;
      const m2Label = taskMetricsMapping[task].m2;
      let addValidationComment = false;
      let addBackboneComment = false;
      let tableHtml = "";
      if (task !== primaryTask) {
        tableHtml += `<div class="table-subtitle">${capitalize(task)} Metrics</div>`;
      }
      tableHtml += `<table>
                      <tr>
                        <th>Dataset</th>
                        <th>${m1Label}</th>
                        <th>${m2Label}</th>
                      </tr>`;
      Object.keys(datasets).forEach(ds => {
        if (ds.includes("*")) {
          addBackboneComment = true;
        }
        const dsData = datasets[ds] || {};
        let val1 = dsData[m1Label] !== undefined ? dsData[m1Label].toString() : '';
        let val2 = dsData[m2Label] !== undefined ? dsData[m2Label].toString() : '';
        if ((val1 && val1.includes("~")) || (val2 && val2.includes("~"))) {
          addValidationComment = true;
        }
        tableHtml += `<tr>
                        <td>${ds}</td>
                        <td>${val1}</td>
                        <td>${val2}</td>
                      </tr>`;
      });
      tableHtml += `</table>`;
      if (addValidationComment || addBackboneComment) {
        tableHtml += `<div class="table-comment">`;
        if (addValidationComment) {
          tableHtml += `~ means data only for validation datasets`;
        }
        if (addBackboneComment) {
          tableHtml += `${addValidationComment ? '<br>' : ''}* means it has a different backbone`;
        }
        tableHtml += `</div>`;
      }
      return tableHtml;
    }
  
    if (realMetrics) {
      tablesHtml += buildTableForTask(primaryTask);
      tasksOrder.forEach(task => {
        if (task !== primaryTask) {
          tablesHtml += buildTableForTask(task);
        }
      });
    }
  
    popup.innerHTML = `
      <div class="header">
        <div class="links">${linksHtml}</div>
        <div class="model-title">${nodeLabel}, ${age}</div>
      </div>
      ${tablesHtml ? `<div class="real-metrics">${tablesHtml}</div>` : ''}
    `;
    
    const { x } = node.renderedPosition();
    const nodeBoundingBox = node.renderedBoundingBox();
    popup.style.left = `${x - popup.offsetWidth / 2}px`;
    popup.style.top = `${nodeBoundingBox.y2 + 10}px`;
    popup.style.display = 'block';
  
    // Highlight connections
    cy.elements().removeClass('highlighted');
    node.addClass('highlighted');
    node.outgoers().addClass('highlighted');
    node.incomers().addClass('highlighted');
  });
  
  // Reposition popup on pan and zoom
  cy.on('pan zoom', function () {
    if (popup.style.display !== 'none' && currentPopupNode) {
      const { x } = currentPopupNode.renderedPosition();
      const nodeBoundingBox = currentPopupNode.renderedBoundingBox();
      popup.style.left = `${x - popup.offsetWidth / 2}px`;
      popup.style.top = `${nodeBoundingBox.y2 + 10}px`;
    }
  });
  
  // Hide popup when background is tapped
  cy.on('tap', function (evt) {
    if (evt.target === cy) {
      popup.style.display = 'none';
    }
  });
  
  // Hide popup when clicking outside the graph and popup
  document.addEventListener('click', (e) => {
    const isClickInsidePopup = popup.contains(e.target);
    const isClickInsideGraph = e.target.closest('#cy') !== null;
    if (!isClickInsidePopup && !isClickInsideGraph) {
      popup.style.display = 'none';
    }
  }, true);
  
  // Define highlighted style
  cy.style().selector('.highlighted').style({
    'background-color': '#FFDC00',
    'line-color': '#FFDC00',
    'target-arrow-color': '#FFDC00',
    'transition-property': 'background-color, line-color, target-arrow-color',
    'transition-duration': '0.25s'
  }).update();
  
  // Zoom in on node neighborhood on double-click
  cy.on('dblclick', 'node', function(evt) {
    const node = evt.target;
    const neighborhood = node.union(node.outgoers()).union(node.incomers());
    cy.animate({
      center: { eles: neighborhood },
      zoom: 2,
      duration: 500
    });
  });
  
  // Reset zoom on background double-click
  cy.on('dblclick', function(evt) {
    if (evt.target === cy) {
      cy.animate({
        zoom: 1,
        center: { x: cy.width() / 2, y: cy.height() / 2 },
        duration: 500
      }, function() {
        cy.fit(undefined, { padding: 20 });
      });
    }
  });
  
  // Search functionality for a node
  function searchNode() {
    const nodeName = document.getElementById('nodeName').value.toLowerCase().replace(/\s+/g, "_");
    const node = cy.$(`#${nodeName}`);
    if (node.length === 0) {
      alert(`Node "${nodeName}" not found.`);
      return;
    }
    cy.elements().addClass('hidden');
    const connectedElements = node.union(node.outgoers()).union(node.incomers());
    connectedElements.removeClass('hidden');
    cy.layout({
      name: 'cola',
      fit: true,
      padding: 10,
      concentric: (ele) => (ele.same(node) ? 2 : 1),
      levelWidth: () => 1
    }).run();
    cy.fit();
    cy.center();
  }
  
  document.getElementById('nodeName').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      searchNode();
    }
  });
  
  // Reset view to full graph
  function resetView() {
    selectedTask = null;
    cy.elements().removeClass('hidden');
    resetFilteringControls();
    cy.layout({
      name: 'cola',
      nodeSpacing: 5,
      edgeLengthVal: 10,
      animate: true,
      randomize: false,
      avoidOverlap: true
    }).run();
    cy.fit();
    cy.center();
  }
  
  // Filtering controls
  let selectedTask = null;
  const categoryMapping = {
    instance: 'instance_segmentation',
    semantic: 'semantic_segmentation',
    panoptic: 'panoptic_segmentation'
  };
  
  const filterToggle = document.getElementById('filterToggle');
  const fpsSlider = document.getElementById('fpsSlider');
  const apSlider = document.getElementById('apSlider');
  const ageSlider = document.getElementById('ageSlider');
  
  let filterDebounce;
  function debouncedFilter() {
    clearTimeout(filterDebounce);
    filterDebounce = setTimeout(() => {
      filterNodes(true);
    }, 200);
  }
  
  fpsSlider.addEventListener('input', function () {
    updateSlider(this);
    debouncedFilter();
  });
  apSlider.addEventListener('input', function () {
    updateSlider(this);
    debouncedFilter();
  });
  ageSlider.addEventListener('input', function () {
    updateSlider(this);
    debouncedFilter();
  });
  
  function filterNodes(doFit) {
    document.getElementById('sliderContainer').style.display = filterToggle.checked ? 'block' : 'none';
    if (!filterToggle.checked) {
      cy.elements().addClass('hidden');
      cy.nodes().forEach((node) => {
        if (node.data().category === categoryMapping[selectedTask]) {
          node.removeClass('hidden');
          node.connectedEdges().removeClass('hidden');
        }
      });
    } else {
      const fpsThreshold = parseFloat(fpsSlider.value);
      const metricThreshold = parseFloat(apSlider.value);
      const ageThreshold = parseFloat(ageSlider.value);
      let metricName = selectedTask === 'semantic' ? 'mIoU' : selectedTask === 'panoptic' ? 'PQ' : 'AP';
      cy.elements().addClass('hidden');
      cy.nodes().forEach((node) => {
        const metrics = node.data()[selectedTask];
        const nodeAge = node.data().age;
        if (!metrics) return;
        if (metrics.fps === null && metrics[metricName] === null) return;
        let nodeFps = (metrics.fps !== null && metrics.fps !== undefined) ? metrics.fps : 0;
        let nodeMetric = (metrics[metricName] !== null && metrics[metricName] !== undefined) ? metrics[metricName] : 0;
        if (nodeFps >= fpsThreshold && nodeMetric >= metricThreshold && nodeAge >= ageThreshold) {
          node.removeClass('hidden');
          node.connectedEdges().removeClass('hidden');
        }
      });
    }
    cy.layout({
      name: 'cola',
      nodeSpacing: 0,
      edgeLengthVal: 2,
      animate: true,
      animationDuration: 300,
      randomize: false,
      avoidOverlap: true
    }).run();
    if (doFit) {
      const visibleNodes = cy.nodes().filter((node) => !node.hasClass('hidden'));
      if (visibleNodes.length > 1) {
        cy.fit();
        cy.center();
      } else if (visibleNodes.length === 1) {
        cy.center(visibleNodes[0]);
        cy.fit();
      }
    }
  }
  
  function filterByCategory(category) {
    resetFilteringControls();
    cy.elements().removeClass('hidden');
    if (category === 'common_deep') {
      cy.elements().addClass('hidden');
      cy.nodes().forEach((node) => {
        if (node.data().category === category) {
          node.removeClass('hidden');
          node.connectedEdges().removeClass('hidden');
        }
      });
    } else if (['instance_segmentation', 'semantic_segmentation', 'panoptic_segmentation'].includes(category)) {
      selectedTask = category.split('_')[0];
      document.getElementById('metricLabel').innerText =
        selectedTask === 'instance' ? 'AP:' : selectedTask === 'semantic' ? 'mIoU:' : 'PQ:';
      document.getElementById('filterToggleContainer').style.display = 'flex';
      cy.elements().addClass('hidden');
      cy.nodes().forEach((node) => {
        if (node.data().category === category) {
          node.removeClass('hidden');
          node.connectedEdges().removeClass('hidden');
        }
      });
    }
    cy.layout({
      name: 'cola',
      nodeSpacing: 5,
      edgeLengthVal: 10,
      animate: true,
      randomize: false,
      avoidOverlap: true
    }).run();
    cy.fit();
    cy.center();
  }
  
  function resetFilteringControls() {
    document.getElementById('filterToggleContainer').style.display = 'none';
    document.getElementById('sliderContainer').style.display = 'none';
    filterToggle.checked = false;
    fpsSlider.value = 0;
    apSlider.value = 0;
    ageSlider.value = 0;
    updateSlider(fpsSlider);
    updateSlider(apSlider);
    updateSlider(ageSlider);
  }
  
  fpsSlider.addEventListener('input', function () {
    updateSlider(this);
    filterNodes();
  });
  apSlider.addEventListener('input', function () {
    updateSlider(this);
    filterNodes();
  });
  ageSlider.addEventListener('input', function () {
    updateSlider(this);
    filterNodes();
  });
  
  filterToggle.addEventListener('change', function () {
    filterNodes();
  });
  
  function updateSlider(slider) {
    let value = slider.value;
    const min = slider.min;
    let max = slider.max;
    if (slider.id === "ageSlider") {
      value = (value - min) / (max - min);
      max = 1;
    }
    const percentage = (value / max) * 100;
    slider.style.background = `linear-gradient(to right, #007BFF ${percentage}%, #ccc ${percentage}%)`;
  }
  